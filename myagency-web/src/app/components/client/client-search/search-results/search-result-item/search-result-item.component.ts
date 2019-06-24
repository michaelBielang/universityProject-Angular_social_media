import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../../../enums/user-interface';
import {FileManagerService} from '../../../../../services/file-manager.service';
import {ClientJobsService} from '../../../../../services/client/client-jobs.service';

@Component({
  selector: 'search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input()
  public model: Model;

  public downloadUrl: string;

  public favorite: boolean;

  constructor(private fileManagerService: FileManagerService,
              private clientJobService: ClientJobsService) {
  }

  ngOnInit() {
    this.fileManagerService.downLoadUrl(this.model.profilePicture).then(src => this.downloadUrl = src);
  }

  saveModel(uid: string, jobId: string) {
    this.clientJobService.addModelToJob(uid, jobId);
  }
}
