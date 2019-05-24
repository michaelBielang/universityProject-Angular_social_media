import {Injectable} from '@angular/core';
import {ClientJob} from '../../enums/client-job-interface';
import {BehaviorSubject} from 'rxjs';
import {JobStatus} from '../../enums/job-status.type';


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

  selectedJobId: number;

  constructor() {
    this.clientJobs = [{
      jobId: 10,
      location: 'munich',
      description: 'super nice job',
      title: 'WOW Amazing',
      budget: 12345,
      clientId: 2345,
      models: [{modelId: 1, status: JobStatus.REQUEST, fee: '200€'},
        {modelId: 1, status: JobStatus.COMING, fee: '190€'},
        {modelId: 4, status: JobStatus.OPTION, fee: '250€'}]
    }];
  }

  addJob(job: ClientJob): void {
    this.clientJobs = [job, ...this.clientJobs];
  }

  get jobs(): ClientJob[] {
    return this.clientJobs;
  }

  addModelToJob(modelId: number) {
    const currentJob = this.clientJobs.find(job => job.jobId === this.selectedJobId);
    if (currentJob) {
      currentJob.models.push({modelId, status: JobStatus.REQUEST, fee: '300€'});
      this.clientJobs = [...this.clientJobs];
    }
  }


  public changeModelStatus(jobId: number, modelId: number, newStatus: JobStatus) {
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
  public job(jobId: number): ClientJob {
    return this.clientJobs.find(job => job.jobId === jobId);
  }
}

