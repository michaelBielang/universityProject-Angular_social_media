import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModelJobsService} from '../../../../services/model/model-jobs.service';
import {NavigatedFromRouteService} from '../../../../services/navigated-from-route.service';
import {BehaviorSubject} from 'rxjs';
import {UserService} from '../../../../services/user.service';
import {CompleteJob} from '../../../../enums/complete-job';
import {User} from '../../../../enums/user-interface';

@Component({
  selector: 'app-job-details-infos',
  templateUrl: './model-job-details-infos.component.html',
  styleUrls: ['./model-job-details-infos.component.scss']
})
export class ModelJobDetailsInfosComponent implements OnInit {

  private _currentJob = new BehaviorSubject<CompleteJob>(null);

  public get currentJob(): CompleteJob {
    return this._currentJob.getValue();
  }

  public set currentJob(job: CompleteJob) {
    this._currentJob.next(job);
  }

  private client: User;

  constructor(private route: ActivatedRoute,
              private jobsService: ModelJobsService,
              private userService: UserService,
              private navigatedFromRouteService: NavigatedFromRouteService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
    const id = this.route.parent.snapshot.paramMap.get('jobId');
    this.jobsService.job(id).subscribe(job => {
      this.currentJob = job;
      this.userService.user(job.job.clientId).subscribe(client => this.client = client);
    });
  }

  ngOnInit() {
  }

}
