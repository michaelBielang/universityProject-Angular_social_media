import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientJobsService} from '../../../../services/client/client-jobs.service';
import {JobStatus} from '../../../../enums/job-status.enum';
import {NavigatedFromRouteService} from '../../../../services/navigated-from-route.service';
import {CompleteJob} from '../../../../enums/complete-job';
import {FileManagerService} from '../../../../services/file-manager.service';
import {DefaultImageRef} from '../../../../enums/defaults';

@Component({
  selector: 'app-job-details-infos',
  templateUrl: './client-job-details-infos.component.html',
  styleUrls: ['./client-job-details-infos.component.scss']
})
export class ClientJobDetailsInfosComponent {

  public id: string;
  public jobImage: string;

  public currentJob: CompleteJob;

  constructor(private route: ActivatedRoute,
              private jobsService: ClientJobsService,
              private navigatedFromRouteService: NavigatedFromRouteService,
              private fileManagerService: FileManagerService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
    const id = this.route.parent.snapshot.paramMap.get('jobId');
    this.jobsService.job(id)
      .subscribe(job => {
        this.currentJob = job;
        let imageRef;
        if (!!this.currentJob.job.jobImage) {
          imageRef = this.currentJob.job.jobImage;
        } else {
          imageRef = DefaultImageRef;
        }
        this.fileManagerService.downLoadUrl(imageRef).then(src => this.jobImage = src);
      });
  }

  public acceptModel(modelId: string) {
    this.jobsService.changeModelStatus(this.currentJob.job.uid, modelId, JobStatus.COMING);
  }

  formatDate(timestamp) {
    const date = new Date(timestamp.toMillis());
    return date.toDateString();
  }
}
