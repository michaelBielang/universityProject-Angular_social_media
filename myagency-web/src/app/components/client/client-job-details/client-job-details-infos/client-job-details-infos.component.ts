import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientJobsService} from '../../../../services/client/client-jobs.service';
import {JobStatus} from '../../../../enums/job-status.type';
import {NavigatedFromRouteService} from '../../../../services/navigated-from-route.service';
import {ModelService} from '../../../../services/model.service';
import {BehaviorSubject} from 'rxjs';
import {ClientJob} from '../../../../enums/client-job-interface';

@Component({
  selector: 'app-job-details-infos',
  templateUrl: './client-job-details-infos.component.html',
  styleUrls: ['./client-job-details-infos.component.scss']
})
export class ClientJobDetailsInfosComponent implements OnInit {

  public id: string;

  public JobStatus = JobStatus;

  private _currentJob = new BehaviorSubject<ClientJob>(null);

  public get currentJob(): ClientJob {
    return this._currentJob.getValue();
  }

  public set currentJob(job: ClientJob) {
    this._currentJob.next(job);
  }

  constructor(private route: ActivatedRoute,
              private jobsService: ClientJobsService,
              private navigatedFromRouteService: NavigatedFromRouteService,
              private modelService: ModelService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
    const id = this.route.parent.snapshot.paramMap.get('jobId');
    this.jobsService.job(id).subscribe(job => this.currentJob = job);
  }

  ngOnInit() {
  }

  public acceptModel(modelId: string) {
    this.jobsService.changeModelStatus(this.currentJob.jobId, modelId, JobStatus[JobStatus.COMING]);
  }

}
