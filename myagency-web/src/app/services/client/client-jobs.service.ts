import {Injectable} from '@angular/core';
import {ClientJob} from '../../enums/client-job-interface';
import {BehaviorSubject} from 'rxjs';


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
  }

  addJob(job: ClientJob): void {
    this.clientJobs = [job, ...this.clientJobs];
  }

  get jobs(): ClientJob[] {
    return this.clientJobs;
  }

  addModelToJob(uid: number) {
    const currentJob = this.clientJobs.find(job => job.id === this.selectedJobId);
    if (currentJob) {
      currentJob.models.push(uid);
      this.clientJobs = [...this.clientJobs];
    }
  }
}

