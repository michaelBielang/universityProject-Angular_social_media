import {Component, OnInit} from '@angular/core';
import {ClientJobsService} from '../../../services/client/client-jobs.service';

@Component({
  selector: 'app-client-job-overview',
  templateUrl: './client-job-overview.component.html',
  styleUrls: ['./client-job-overview.component.scss']
})
export class ClientJobOverviewComponent implements OnInit {

  constructor(private jobsService: ClientJobsService) {
  }

  ngOnInit() {
  }

}
