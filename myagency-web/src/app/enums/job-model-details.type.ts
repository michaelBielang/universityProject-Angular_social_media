import {JobStatus} from './job-status.enum';

export interface JobModelDetails {
  uid: string;
  jobId: string;
  modelId: string;
  fee: string;
  status: JobStatus;
}
