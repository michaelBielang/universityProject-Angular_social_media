import {Component, Input, OnInit} from '@angular/core';
import {JobOverview, JobsService} from '../../../../services/jobs.service';

@Component({
  selector: 'job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {

  @Input()
  public job: JobOverview;

  constructor(public jobService: JobsService) {
  }

  ngOnInit() {
  }

}
