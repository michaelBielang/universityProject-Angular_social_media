import {Component, OnInit} from '@angular/core';
import {ModelJobsService} from '../../../services/model/model-jobs.service';
import {JobOverview} from '../../../enums/model-job.type';
import {JobStatus} from '../../../enums/job-status.type';

@Component({
  selector: 'app-client-job-overview',
  templateUrl: './client-job-overview.component.html',
  styleUrls: ['./client-job-overview.component.scss']
})
export class ClientJobOverviewComponent implements OnInit {

  public jobs: JobOverview[];
  public jobsInProgress: JobOverview[];
  public comingJobs: JobOverview[];
  public pastJobs: JobOverview[];

  constructor(private jobsService: ModelJobsService) {
    this.jobs = jobsService.jobsOverview();
    this.splitJobs();
  }

  ngOnInit() {
  }

  private splitJobs(): void {
    this.jobsInProgress = this.jobs.filter(value => value.status === JobStatus.REQUEST);
    this.comingJobs = this.jobs.filter(value => value.status === JobStatus.COMING);
    this.pastJobs = this.jobs.filter(value => value.status === JobStatus.PAST);
  }

}
