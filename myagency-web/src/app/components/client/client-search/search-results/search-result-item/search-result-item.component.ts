import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Model} from '../../../../../enums/user-interface';
import {FileManagerService} from '../../../../../services/file-manager.service';

@Component({
  selector: 'search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {

  @Input()
  public model: Model;

  @Output()
  public modelAdded: EventEmitter<string> = new EventEmitter<string>();

  public downloadUrl: string;

  public favorite: boolean;

  constructor(private fileManagerService: FileManagerService) {
  }

  ngOnInit() {
    this.fileManagerService.downLoadUrl(this.model.profilePicture).then(src => this.downloadUrl = src);
  }
}
