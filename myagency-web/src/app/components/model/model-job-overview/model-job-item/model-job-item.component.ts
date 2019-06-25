import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {Client, User} from '../../../../enums/user-interface';
import {BehaviorSubject} from 'rxjs';
import {filter, mergeMap} from 'rxjs/operators';
import {CompleteJob} from '../../../../enums/complete-job';
import {FileManagerService} from '../../../../services/file-manager.service';
import {DefaultImageRef} from '../../../../enums/defaults';

@Component({
  selector: 'model-job-item',
  templateUrl: './model-job-item.component.html',
  styleUrls: ['./model-job-item.component.scss']
})
export class ModelJobItemComponent implements OnInit {

  private _job: BehaviorSubject<CompleteJob> = new BehaviorSubject(null);

  @Input()
  set job(value: CompleteJob) {
    this._job.next(value);
  }

  get job(): CompleteJob {
    return this._job.getValue();
  }

  private job$ = this._job.asObservable();

  public client: Client;
  public jobImage: string;

  constructor(private userService: UserService,
              private fileManagerService: FileManagerService) {
  }

  ngOnInit(): void {
    this.job$.pipe(filter(job => job !== null),
      mergeMap(job => this.userService.user(job.job.clientId)))
      .subscribe((client: User) => {
        this.client = client;
        this.fetchJobImage();
      });
  }

  private fetchJobImage() {
    let imageRef;
    if (this.job.job.jobImage) {
      imageRef = this.job.job.jobImage;
    } else if (this.client.profilePicture) {
      imageRef = this.client.profilePicture;
    } else {
      imageRef = DefaultImageRef;
    }
    this.fileManagerService.downLoadUrl(imageRef).then(src => this.jobImage = src);
  }

  formatDate(timestamp) {
    const date = new Date(timestamp.toMillis());
    return date.toDateString();
  }
}
