import {Component, OnInit} from '@angular/core';
import {JobStatus} from '../../../enums/job-status.type';
import {ClientJobsService} from '../../../services/client/client-jobs.service';
import {ClientJob} from '../../../enums/client-job-interface';

@Component({
  selector: 'app-client-job-overview',
  templateUrl: './client-job-overview.component.html',
  styleUrls: ['./client-job-overview.component.scss']
})
export class ClientJobOverviewComponent implements OnInit {

  public jobs: ClientJob[];
  public jobsInProgress: ClientJob[];
  public comingJobs: ClientJob[];
  public pastJobs: ClientJob[];

  constructor(private jobsService: ClientJobsService) {
    this.jobs = jobsService.clientJobs;
    this.splitJobs();
  }

  ngOnInit() {
  }

  private splitJobs(): void {
    this.jobsInProgress = this.jobs.filter(job =>
      job.models.every(model => model.status === JobStatus.REQUEST || model.status === JobStatus.OPTION));
    this.comingJobs = this.jobs.filter(job =>
      job.models.every(model => model.status === JobStatus.COMING));
    this.comingJobs = this.jobs.filter(job =>
      job.models.every(model => model.status === JobStatus.PAST));
  }

}
