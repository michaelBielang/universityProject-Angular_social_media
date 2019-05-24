import {Component, Input, OnInit} from '@angular/core';
import {JobOverview} from '../../../../enums/model-job.type';

@Component({
  selector: 'client-job-item',
  templateUrl: './client-job-item.component.html',
  styleUrls: ['./client-job-item.component.scss']
})
export class ClientJobItemComponent implements OnInit {

  @Input()
  public job: JobOverview;

  constructor() {
  }

  ngOnInit() {
  }

}
