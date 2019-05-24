import {Component, Input} from '@angular/core';
import {JobOverview} from '../../../../enums/model-job.type';

@Component({
  selector: 'model-job-item',
  templateUrl: './model-job-item.component.html',
  styleUrls: ['./model-job-item.component.scss']
})
export class ModelJobItemComponent {

  @Input()
  public job: JobOverview;

  constructor() {
  }
}
