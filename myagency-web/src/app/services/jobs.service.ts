import {Injectable} from '@angular/core';

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

export enum JobStatus {
  REQUEST,
  OPTION,
  COMING,
  PAST
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private overview: JobOverview = {
    imgSrc: 'https://image.pitchbook.com/aVTBCrqHkm8LAvzqdXt8u8ELcJG1476941927661_200x200?uq=H8lJTeVz',
    client: 'XY',
    date: '18.06.2019 - 20.06.2019',
    location: 'Moskva, Russia',
    fee: '250.000 Rubel (~3460€)',
    jobId: '123',
    status: JobStatus.REQUEST
  };

  constructor() {
  }

  public jobsOverview(): JobOverview[] {
    const jobOverview = [];
    for (let i = 0; i < 10; i++) {
      const overCache = this.overview;
      overCache.jobId += i;
      overCache.client += ' ' + i;
      jobOverview.push(overCache);
    }
    return jobOverview;
  }

  public jobDetails(id: string): JobDetails {
    return {
      clientDetails: 'XY is a high fashion designer, who tries to combine minimalism with natural elements.',
      contact: 'Igor, phone: 12324567, mail: igor@xy.z',
      detailedLocation: 'XY Factory, Moskva 119121, Russland Ulitsa Plyushchikha, 64',
      jobDetails: 'Fashion shooting with magazin publication and TV commercials for 2 month. The job goes from 18.06.2019 to 20.06.2019',
      photographer: 'Pyotr Tchaikovsky',
      jobOverview: this.overview
    };
  }
}
