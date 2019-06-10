import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../auth.service';
import {Collections} from '../../enums/collections.enum';
import {JobModelDetails} from '../../enums/job-model-details.type';
import {JobStatus} from '../../enums/job-status.enum';
import {CompleteJob} from '../../enums/complete-job';
import {first, map, takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelJobsService {

  private readonly _modelJobs = new BehaviorSubject<CompleteJob[]>([]);

  public get modelJobs(): CompleteJob[] {
    return this._modelJobs.getValue();
  }

  public set modelJobs(val: CompleteJob[]) {
    this._modelJobs.next(val);
  }

  public readonly modelJobs$ = this._modelJobs.asObservable();

  public readonly openRequest$ = this.modelJobs$.pipe(map(jobs => this.modelJobs.filter((job: CompleteJob) =>
    job.bookings[0].status === JobStatus.REQUEST)));
  public readonly jobOptions$ = this.modelJobs$.pipe(map(jobs => this.modelJobs.filter((job: CompleteJob) =>
    job.bookings[0].status === JobStatus.OPTION)));
  public readonly comingJobs$ = this.modelJobs$.pipe(map(jobs => this.modelJobs.filter((job: CompleteJob) =>
    job.bookings[0].status === JobStatus.COMING)));
  public readonly pastJobs$ = this.modelJobs$.pipe(map(jobs => this.modelJobs.filter((job: CompleteJob) =>
    job.bookings[0].status === JobStatus.PAST)));


  private unsubscribeJobs$ = new Subject();

  constructor(private fireStore: AngularFirestore,
              private authService: AuthService) {
    const currentBookings = this.fireStore.collection<JobModelDetails>(Collections.JOBBOOKINGS, ref =>
      ref.where('modelId', '==', authService.user.getValue().uid)).valueChanges();

    const currentJobs = currentBookings.subscribe(bookings => {
      this.unsubscribeJobs$.next();
      this.modelJobs = [];
      bookings.forEach((booking: JobModelDetails) =>
        this.fireStore.collection(Collections.JOBS).doc(booking.jobId).valueChanges().pipe(takeUntil(this.unsubscribeJobs$), map(job => {
          return {job, bookings: [booking]};
        })).subscribe((job: CompleteJob) =>
          this.modelJobs = [...this.modelJobs, job]));
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

  public job(jobId: string): Observable<CompleteJob> {
    return this.modelJobs$.pipe(map((jobs: CompleteJob[]) => jobs.find(job => job.job.uid === jobId)));
  }

}
