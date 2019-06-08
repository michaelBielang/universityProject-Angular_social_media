import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientJobsService} from '../../../../services/client/client-jobs.service';
import {JobStatus} from '../../../../enums/job-status.enum';
import {NavigatedFromRouteService} from '../../../../services/navigated-from-route.service';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../enums/user-interface';
import {CompleteJob} from '../../../../enums/complete-job';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-job-details-infos',
  templateUrl: './client-job-details-infos.component.html',
  styleUrls: ['./client-job-details-infos.component.scss']
})
export class ClientJobDetailsInfosComponent {

  public id: string;

  public JobStatus = JobStatus;

  private currentJob: CompleteJob;
  private _models: BehaviorSubject<User[]> = new BehaviorSubject([]);

  public get models(): User[] {
    return this._models.getValue();
  }

  public set models(models: User[]) {
    this._models.next(models);
  }

  public models$ = this._models.asObservable();

  constructor(private route: ActivatedRoute,
              private jobsService: ClientJobsService,
              private navigatedFromRouteService: NavigatedFromRouteService,
              private userService: UserService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
    const id = this.route.parent.snapshot.paramMap.get('jobId');
    this.jobsService.job(id)
      .subscribe(job => {
        this.currentJob = job;
        this.userService.users(job.bookings.map(model => model.modelId))
          .subscribe(models => this.models = models);
      });
  }

  public modelInfo(uid: string) {
    return this.models.find(model => model.uid === uid);
  }

  public acceptModel(modelId: string) {
    this.jobsService.changeModelStatus(this.currentJob.job.uid, modelId, JobStatus.COMING);
  }

}
