import {Component, Input, OnInit} from '@angular/core';
import {CompleteJob} from '../../../../enums/complete-job';
import {FileManagerService} from '../../../../services/file-manager.service';

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
    if (this.job.job.jobImage) {
      this.fileManagerService.downLoadUrl(this.job.job.jobImage).then(src => this.jobImage = src);
    }
  }

}
