import {Injectable} from '@angular/core';
import {Job} from '../../enums/job.type';
import {JobStatus} from '../../enums/job-status.enum';
import {AuthService} from '../auth.service';
import {Collections} from '../../enums/collections.enum';
import {AngularFirestore} from '@angular/fire/firestore';
import {JobModelDetails} from '../../enums/job-model-details.type';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {first, map, takeUntil} from 'rxjs/operators';
import {CompleteJob} from '../../enums/complete-job';


@Injectable({
  providedIn: 'root'
})
export class ClientJobsService {

  private readonly _clientJobs = new BehaviorSubject<CompleteJob[]>([]);


  public get clientJobs(): CompleteJob[] {
    return this._clientJobs.getValue();
  }

  public set clientJobs(val: CompleteJob[]) {
    this._clientJobs.next(val);
  }

  public readonly clientJobs$ = this._clientJobs.asObservable();

  public readonly jobsInProgress$ = this.clientJobs$.pipe(map(jobs => jobs.filter((job: CompleteJob) =>
    job.bookings.some(model => model.status === JobStatus.REQUEST || model.status === JobStatus.OPTION) || job.bookings.length === 0)));
  public readonly comingJobs$ = this.clientJobs$.pipe(map(jobs => jobs.filter((job: CompleteJob) =>
    job.bookings.every(model => model.status === JobStatus.COMING) && job.bookings.length !== 0)));
  public readonly finishedJobs$ = this.clientJobs$.pipe(map(jobs => jobs.filter((job: CompleteJob) =>
    job.bookings.every(model => model.status === JobStatus.PAST))));

  private unsubscribeJobbookings$ = new Subject();

  constructor(private fireStore: AngularFirestore,
              private authService: AuthService) {
    const currentUserJobs: Observable<Job[]> = this.fireStore.collection<Job>(Collections.JOBS, ref =>
      ref.where('clientId', '==', authService.user.getValue().uid)).valueChanges();

    currentUserJobs.subscribe((jobs: Job[]) => {
      this.unsubscribeJobbookings$.next();
      this.clientJobs = [];
      jobs.forEach(job =>
        this.fireStore.collection<JobModelDetails>(Collections.JOBBOOKINGS, ref =>
          ref.where('jobId', '==', job.uid)).valueChanges().pipe(
          takeUntil(this.unsubscribeJobbookings$), map((bookings: JobModelDetails[]) => {
            return {job, bookings};
          })).subscribe(completeJob => {
          const filteredClientJobs = this.clientJobs.filter(savedJob => savedJob.job.uid !== completeJob.job.uid);
          this.clientJobs = [...filteredClientJobs, completeJob];
        }));
    });
  }

  addJob(job: Job): void {
    this.fireStore.collection(Collections.JOBS).doc(job.uid).set(job);
  }

  public addModelToJob(modelId: string, jobId: string) {
    const uid = this.fireStore.createId();
    return this.fireStore.collection(Collections.JOBBOOKINGS).doc(uid).set({
      uid,
      modelId,
      jobId,
      status: JobStatus.REQUEST,
      fee: '300€'
    });
  }

  public deleteModelFromJob(modelId: string, jobId: string) {
    this.fireStore.collection(Collections.JOBBOOKINGS, ref => ref
      .where('modelId', '==', modelId)
      .where('jobId', '==', jobId)).valueChanges().pipe(first()).subscribe((bookings: JobModelDetails[]) => {
      if (bookings.length > 0) {
        this.fireStore.collection(Collections.JOBBOOKINGS).doc(bookings[0].uid).delete();
      }
    });
  }

  public changeModelStatus(jobId: string, modelId: string, newStatus: JobStatus) {
    this.fireStore.collection(Collections.JOBBOOKINGS, ref => ref
      .where('modelId', '==', modelId)
      .where('jobId', '==', jobId)).valueChanges().pipe(first()).subscribe((bookings: JobModelDetails[]) => {
      if (bookings.length > 0) {
        this.fireStore.collection(Collections.JOBBOOKINGS).doc(bookings[0].uid).update({status: newStatus});
      }
    });
  }

  public models(jobId: string): Observable<JobModelDetails[]> {
    return this.fireStore.collection<JobModelDetails>(Collections.JOBBOOKINGS, ref => ref.where('jobId', '==', jobId)).valueChanges();
  }

  public job(jobId: string): Observable<CompleteJob> {
    return this.clientJobs$.pipe(map((jobs: CompleteJob[]) => jobs.find(job => job.job.uid === jobId)));
  }
}

