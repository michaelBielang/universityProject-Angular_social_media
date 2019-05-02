import {Component, Input} from '@angular/core';
import {JobOverview} from '../../../../services/jobs.service';

@Component({
  selector: 'job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent {

  @Input()
  public job: JobOverview;

  constructor() {
  }
}
