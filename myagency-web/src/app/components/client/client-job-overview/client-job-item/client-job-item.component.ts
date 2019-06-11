import {Component, Input, OnInit} from '@angular/core';
import {CompleteJob} from '../../../../enums/complete-job';

@Component({
  selector: 'client-job-item',
  templateUrl: './client-job-item.component.html',
  styleUrls: ['./client-job-item.component.scss']
})
export class ClientJobItemComponent implements OnInit {

  @Input()
  public job: CompleteJob;

  constructor() {
  }

  ngOnInit() {
  }

}
