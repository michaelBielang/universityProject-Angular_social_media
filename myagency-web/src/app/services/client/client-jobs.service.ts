import {Injectable} from '@angular/core';
import {Job} from '../../enums/client-job-interface';


@Injectable({
  providedIn: 'root'
})
export class ClientJobsService {

  clientJobs: Job[] = [];
  selectedJobId: number;

  constructor() {
  }

  addJob(job: Job): void {
    this.clientJobs.push(job);
  }

  get jobs(): Job[] {
    return this.clientJobs;
  }

  addModelToJob(uid: number) {
    for (const job of this.clientJobs) {
      if (job.id === this.selectedJobId) {
        console.log('Success');
        job.models.push(uid);
      }
    }
  }
}
