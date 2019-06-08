import {JobModelDetails} from './job-model-details.type';

export interface ClientJob {
  jobId: number;
  clientId: number;
  title: string;
  description: string;
  location: string;
  budget: number;
  models: JobModelDetails[];
}
