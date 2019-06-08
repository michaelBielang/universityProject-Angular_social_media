import {Component} from '@angular/core';
import {ModelJobsService} from '../../../services/model/model-jobs.service';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../../services/auth.service';
import {JobStatus} from '../../../enums/job-status.enum';
import {CompleteJob} from '../../../enums/complete-job';

@Component({
  selector: 'model-job-overview',
  templateUrl: './model-job-overview.component.html',
  styleUrls: ['./model-job-overview.component.scss']
})
export class ModelJobOverviewComponent {

  private readonly modelUid: string;

  constructor(private jobsService: ModelJobsService,
              private snackBar: MatSnackBar,
              authService: AuthService) {
    this.modelUid = authService.user.getValue().uid;
  }

  /**
   * denied job is removed out of the list
   * @param job that should be rejected
   */
  public rejectJob(job: CompleteJob) {
    this.jobsService.changeModelStatus(job.job.uid, this.modelUid, JobStatus.REJECTED);
    this.snackBar.open('Job rejected', 'UNDO', {
      duration: 2000,
    }).onAction().subscribe(() => {
      this.jobsService.changeModelStatus(job.job.uid, this.modelUid, JobStatus.REQUEST);
    });
  }

  /**
   * gives an option for the job
   * @param job that should be accepted
   */
  public acceptJob(job: CompleteJob) {
    this.jobsService.changeModelStatus(job.job.uid, this.modelUid, JobStatus.OPTION);
    this.snackBar.open('Job accepted', 'UNDO', {
      duration: 2000,
    }).onAction().subscribe(() => {
      this.jobsService.changeModelStatus(job.job.uid, this.modelUid, JobStatus.REQUEST);
    });
  }


}
