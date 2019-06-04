import {Injectable} from '@angular/core';
import {ClientJob} from '../../enums/client-job-interface';
import {BehaviorSubject} from 'rxjs';
import {JobStatus} from '../../enums/job-status.type';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ClientJobsService {

  private readonly _clientJobs = new BehaviorSubject<ClientJob[]>([]);


  public get clientJobs(): ClientJob[] {
    return this._clientJobs.getValue();
  }

  public set clientJobs(val: ClientJob[]) {
    this._clientJobs.next(val);
  }

  public readonly clientJobs$ = this._clientJobs.asObservable();

  selectedJobId: string;

  constructor(private fireStore: AngularFirestore) {
    this.clientJobs = [{
      jobId: '10',
      location: 'munich',
      description: 'super nice job',
      title: 'WOW Amazing',
      clientId: '1m09BkGZsEag5oQnek7OhF8zKJI2',
      models: [{modelId: '1', status: JobStatus.REQUEST, fee: '200€'},
        {modelId: '2', status: JobStatus.COMING, fee: '190€'},
        {modelId: '4', status: JobStatus.OPTION, fee: '250€'}]
    }];
  }

  addJob(job: ClientJob): void {
    this.fireStore.doc(`jobs/${job.jobId}`).set(job).then(response => console.log(response));
    this.clientJobs = [job, ...this.clientJobs];
  }

  get jobs(): ClientJob[] {
    return this.clientJobs;
  }

  addModelToJob(modelId: string) {
    const currentJob = this.clientJobs.find(job => job.jobId === this.selectedJobId);
    if (currentJob) {
      currentJob.models.push({modelId, status: JobStatus.REQUEST, fee: '300€'});
      this.clientJobs = [...this.clientJobs];
    }
  }


  public changeModelStatus(jobId: string, modelId: string, newStatus: JobStatus) {
    const selectedJob = this.clientJobs.find(job => job.jobId === jobId);
    if (selectedJob) {
      selectedJob.models.find(model => model.modelId === modelId).status = newStatus;
      this.clientJobs = [...this.clientJobs];
    }
  }

  /**
   * @param jobId wich job should be returned
   * @return ClientJob to the given jobId
   */
  public job(jobId: string): ClientJob {
    return this.clientJobs.find(job => job.jobId === jobId);
  }
}

