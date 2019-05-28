import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobDetails, JobsService} from '../../../../services/jobs.service';
import {NavigatedFromRouteService} from '../navigated-from-route.service';

@Component({
  selector: 'app-job-details-infos',
  templateUrl: './job-details-infos.component.html',
  styleUrls: ['./job-details-infos.component.scss']
})
export class JobDetailsInfosComponent implements OnInit {

  public details: JobDetails;

  constructor(private route: ActivatedRoute,
              private jobsService: JobsService,
              private navigatedFromRouteService: NavigatedFromRouteService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
    const id = this.route.snapshot.paramMap.get('jobId');
    this.details = this.jobsService.jobDetails(id);
  }

  ngOnInit() {
  }

}
