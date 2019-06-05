import {Component, Input, OnInit} from '@angular/core';

import {ClientJob} from '../../../../enums/client-job-interface';

@Component({
  selector: 'client-job-item',
  templateUrl: './client-job-item.component.html',
  styleUrls: ['./client-job-item.component.scss']
})
export class ClientJobItemComponent implements OnInit {

  @Input()
  public job: ClientJob;

  constructor() {
  }

  ngOnInit() {
  }

}
