import {Component, OnInit} from '@angular/core';
import {ModelJobsService} from '../../../services/model/model-jobs.service';
import {MatSnackBar} from '@angular/material';
import {JobOverview} from '../../../enums/model-job.type';
import {JobStatus} from '../../../enums/job-status.type';

@Component({
  selector: 'model-job-overview',
  templateUrl: './model-job-overview.component.html',
  styleUrls: ['./model-job-overview.component.scss']
})
export class ModelJobOverviewComponent implements OnInit {

  public jobs: JobOverview[];
  public openRequest: JobOverview[];
  public jobOptions: JobOverview[];
  public comingJobs: JobOverview[];
  public pastJobs: JobOverview[];

  constructor(public jobsService: ModelJobsService,
              private snackBar: MatSnackBar) {
    this.jobs = jobsService.jobsOverview();
    this.splitJobs();
  }

  ngOnInit() {
  }

  /**
   * denied job is removed out of the list
   * @param job that should be rejected
   */
  public rejectJob(job: JobOverview) {
    const index = this.jobs.indexOf(job);
    this.jobs.splice(this.jobs.indexOf(job), 1);
    this.snackBar.open('Job rejected', 'UNDO', {
      duration: 2000,
    }).onAction().subscribe(() => {
      this.jobs.splice(index, 0, job);
      this.splitJobs();
    });
    this.splitJobs();
  }

  /**
   * gives an option for the job
   * @param job that should be accepted
   */
  public acceptJob(job: JobOverview) {
    job.status = JobStatus.OPTION;
    this.snackBar.open('Job accepted', 'UNDO', {
      duration: 2000,
    }).onAction().subscribe(() => {
      job.status = JobStatus.REQUEST;
      this.splitJobs();
    });
    this.splitJobs();
  }

  private splitJobs(): void {
    this.openRequest = this.jobs.filter(value => value.status === JobStatus.REQUEST);
    this.jobOptions = this.jobs.filter(value => value.status === JobStatus.OPTION);
    this.comingJobs = this.jobs.filter(value => value.status === JobStatus.COMING);
    this.pastJobs = this.jobs.filter(value => value.status === JobStatus.PAST);
  }

}
