import {Injectable} from '@angular/core';

export interface JobOverview {
  imgSrc: string;
  client: string;
  date: string;
  location: string;
  fee: string;
  jobId: string;
}

export interface JobDetails {
  clientDetails: string;
  jobDetails: string;
  contact: string;
  detailedLocation: string;
  photographer: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() {
  }

  public jobsOverview(): JobOverview[] {
    const jobOverview = [{
      imgSrc: 'https://st3.depositphotos.com/4263287/14331/v/1600/depositphotos_143311359-stock-illustration-xy-x-y-hand-writing.jpg',
      client: 'XY',
      date: '18.06.2019 - 20.06.2019',
      location: 'Moskva, Russia',
      fee: '250.000 Rubel (~3460€)',
      jobId: '123'
    }];
    const jobList = jobOverview.concat(jobOverview).concat(jobOverview).concat(jobOverview);
    return jobList;
  }

  public jobDetails(id: string): JobDetails {
    return {
      clientDetails: 'XY is a high fashion designer, who tries to combine minimalism with natural elements.',
      contact: 'Igor',
      detailedLocation: 'XY Factory, Moskva 119121, Russland Ulitsa Plyushchikha, 64',
      jobDetails: 'Fashion shooting with magazin publication and TV commercials for 2 month. The job goes from 18.06.2019 to 20.06.2019',
      photographer: 'Pyotr Tchaikovsky'
    };
  }
}
