import {Injectable} from '@angular/core';
import {ClientJob} from '../../enums/client-job-interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {JobStatus} from '../../enums/job-status.type';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../auth.service';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientJobsService {

  private readonly _clientJobs = new BehaviorSubject<ClientJob[]>([]);

  private jobCollectionName = 'jobs';


  public get clientJobs(): ClientJob[] {
    return this._clientJobs.getValue();
  }

  public set clientJobs(val: ClientJob[]) {
    this._clientJobs.next(val);
  }

  public readonly clientJobs$ = this._clientJobs.asObservable();

  public readonly jobsInProgress$ = this.clientJobs$.pipe(map(jobs => this.clientJobs.filter((job: ClientJob) =>
    job.models.some(model => model.status === JobStatus[JobStatus.REQUEST] || model.status === JobStatus[JobStatus.OPTION]) || job.models.length === 0)));
  public readonly comingJobs$ = this.clientJobs$.pipe(map(jobs => this.clientJobs.filter((job: ClientJob) =>
    job.models.every(model => model.status === JobStatus[JobStatus.COMING]) && job.models.length !== 0)));
  public readonly finishedJobs$ = this.clientJobs$.pipe(map(jobs => this.clientJobs.filter((job: ClientJob) =>
    job.models.every(model => model.status === JobStatus[JobStatus.PAST]))));

  selectedJobId: string;

  constructor(private fireStore: AngularFirestore,
              private authService: AuthService) {
    const currentUserJobs = this.fireStore.collection(this.jobCollectionName, ref => ref.where('clientId', '==', authService.user.getValue().uid));
    currentUserJobs.valueChanges().subscribe((jobs: ClientJob[]) => this.clientJobs = jobs);
  }

  addJob(job: ClientJob): void {
    this.fireStore.doc(`${this.jobCollectionName}/${job.jobId}`).set(job).then(response => console.log(response));
  }

  get jobs(): ClientJob[] {
    return this.clientJobs;
  }

  addModelToJob(modelId: string) {
    const currentJob = this.clientJobs.find(job => job.jobId === this.selectedJobId);
    if (currentJob) {
      this.fireStore.doc(`${this.jobCollectionName}/${this.selectedJobId}`).update({
        models: [...currentJob.models, {
          modelId,
          status: JobStatus.REQUEST,
          fee: '300€'
        }]
      });
    }
  }


  public changeModelStatus(jobId: string, modelId: string, newStatus: string) {
    const selectedJob = this.clientJobs.find(job => job.jobId === jobId);
    selectedJob.models.find(model => model.modelId === modelId).status = newStatus;
    if (selectedJob) {
      this.fireStore.doc(`${this.jobCollectionName}/${this.selectedJobId}`).update({
        models: selectedJob.models
      });
    }
  }

  /**
   * @param jobId wich job should be returned
   * @return ClientJob to the given jobId
   */
  public job(jobId: string): Observable<ClientJob> {
    return this.clientJobs$.pipe(map(jobs => this.clientJobs.find(job => job.jobId === jobId)));
  }
}

