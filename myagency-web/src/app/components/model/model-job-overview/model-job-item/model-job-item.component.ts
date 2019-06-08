import {Component, Input} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../enums/user-interface';
import {BehaviorSubject} from 'rxjs';
import {filter, mergeMap} from 'rxjs/operators';
import {CompleteJob} from '../../../../enums/complete-job';

@Component({
  selector: 'model-job-item',
  templateUrl: './model-job-item.component.html',
  styleUrls: ['./model-job-item.component.scss']
})
export class ModelJobItemComponent {

  private _job: BehaviorSubject<CompleteJob> = new BehaviorSubject(null);

  @Input()
  set job(value: CompleteJob) {
    this._job.next(value);
  }

  get job(): CompleteJob {
    return this._job.getValue();
  }

  private job$ = this._job.asObservable();

  private client: User;

  constructor(private userService: UserService) {
    this.job$.pipe(filter(job => job !== null),
      mergeMap(job => this.userService.user(job.job.clientId)))
      .subscribe((client: User) => this.client = client);
  }
}
