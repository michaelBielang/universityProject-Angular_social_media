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

  selectedJobId: number;

  constructor() {
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

}

