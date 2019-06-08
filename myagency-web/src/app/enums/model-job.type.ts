import {JobStatus} from './job-status.type';

export interface JobOverview {
  imgSrc: string;
  client: string;
  date: string;
  location: string;
  fee: string;
  jobId: string;
  status: JobStatus;
}

export interface JobDetails {
  clientDetails: string;
  jobDetails: string;
  contact: string;
  detailedLocation: string;
  photographer: string;
  jobOverview: JobOverview;
}
