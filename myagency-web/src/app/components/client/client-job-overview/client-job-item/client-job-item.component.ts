import {Component, Input, OnInit} from '@angular/core';
import {CompleteJob} from '../../../../enums/complete-job';
import {FileManagerService} from '../../../../services/file-manager.service';
import {DefaultImageRef} from '../../../../enums/defaults';

@Component({
  selector: 'client-job-item',
  templateUrl: './client-job-item.component.html',
  styleUrls: ['./client-job-item.component.scss']
})
export class ClientJobItemComponent implements OnInit {

  @Input()
  public job: CompleteJob;

  public jobImage: string;

  constructor(private fileManagerService: FileManagerService) {
  }

  ngOnInit() {
    let imageRef;
    if (this.job.job.jobImage) {
      imageRef = this.job.job.jobImage;
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
