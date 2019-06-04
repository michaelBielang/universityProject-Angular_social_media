import {JobModelDetails} from './job-model-details.type';

export interface ClientJob {
  jobId: string;
  clientId: string;
  title: string;
  description: string;
  location: string;
  models: JobModelDetails[];
}
