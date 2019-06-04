import {JobStatus} from './job-status.type';

export interface JobModelDetails {
  modelId: string;
  fee: string;
  status: JobStatus;
}
