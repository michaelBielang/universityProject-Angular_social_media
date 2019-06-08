import {JobModelDetails} from './job-model-details.type';
import {Job} from './job.type';

export interface CompleteJob {
  job: Job;
  bookings: JobModelDetails[];
}
