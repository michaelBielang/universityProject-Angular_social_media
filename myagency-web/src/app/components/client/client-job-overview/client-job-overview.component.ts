import {Component, OnInit} from '@angular/core';
import {JobOverview, JobsService, JobStatus} from '../../../services/jobs.service';

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

  constructor(private jobsService: JobsService) {
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
