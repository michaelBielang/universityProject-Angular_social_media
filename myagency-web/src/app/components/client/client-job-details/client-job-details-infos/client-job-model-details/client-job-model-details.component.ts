import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileManagerService} from '../../../../../services/file-manager.service';
import {JobModelDetails} from '../../../../../enums/job-model-details.type';
import {Model} from '../../../../../enums/user-interface';
import {JobStatus} from '../../../../../enums/job-status.enum';
import {UserService} from '../../../../../services/user.service';

@Component({
  selector: 'client-job-model-details',
  templateUrl: './client-job-model-details.component.html',
  styleUrls: ['./client-job-model-details.component.scss']
})
export class ClientJobModelDetailsComponent implements OnInit {

  @Input()
  public modelJob: JobModelDetails;

  public model: Model;

  @Output()
  public modelAccepted: EventEmitter<string> = new EventEmitter();

  public profileSrc: string;
  public JobStatus = JobStatus;

  constructor(public fileManagerService: FileManagerService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.user(this.modelJob.modelId).subscribe(model => {
      this.model = model;
      this.fileManagerService.downLoadUrl(this.model.profilePicture).then(src => this.profileSrc = src);
    });
  }

  public calculateAge(birthdate) {
    const timeDiff = Math.abs(Date.now() - birthdate.toMillis());
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }
}
