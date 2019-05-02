import {Component, OnInit} from '@angular/core';
import {JobOverview, JobsService, JobStatus} from '../../../services/jobs.service';

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.component.html',
  styleUrls: ['./job-overview.component.scss']
})
export class JobOverviewComponent implements OnInit {

  public jobs: JobOverview[];
  public openRequest: JobOverview[];
  public jobOptions: JobOverview[];
  public comingJobs: JobOverview[];
  public pastJobs: JobOverview[];

  constructor(public jobsService: JobsService) {
    this.jobs = jobsService.jobsOverview();
    this.splitJobs();
  }

  ngOnInit() {
  }

  /**
   * denied job is removed out of the list
   * @param job
   */
  public denyJob(job: JobOverview) {
    this.jobs.splice(this.jobs.indexOf(job), 1);
    this.splitJobs();
  }

  /**
   * gives an option for the job
   * @param job
   */
  public acceptJob(job: JobOverview) {
    job.status = JobStatus.OPTION;
    this.splitJobs();
  }

  private splitJobs(): void {
    this.openRequest = this.jobs.filter(value => value.status === JobStatus.REQUEST);
    this.jobOptions = this.jobs.filter(value => value.status === JobStatus.OPTION);
    this.comingJobs = this.jobs.filter(value => value.status === JobStatus.COMING);
    this.pastJobs = this.jobs.filter(value => value.status === JobStatus.PAST);
  }

}
