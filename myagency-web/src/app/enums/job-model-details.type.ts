import {JobStatus} from './job-status.type';

export interface JobModelDetails {
  modelId: number;
  fee: string;
  status: JobStatus;
}
