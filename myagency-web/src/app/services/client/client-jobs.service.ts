import {Injectable} from '@angular/core';
import {Job} from '../../enums/client-job-interface';


@Injectable({
  providedIn: 'root'
})
export class ClientJobsService {

  clientJobs: Job[] = [];

  constructor() {
  }

  addJob(job: Job): void {
    this.clientJobs.push(job);
  }

  get jobs(): Job[] {
    return this.clientJobs;
  }
}
