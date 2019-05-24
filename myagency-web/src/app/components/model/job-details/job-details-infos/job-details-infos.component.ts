import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModelJobsService} from '../../../../services/model/model-jobs.service';
import {NavigatedFromRouteService} from '../navigated-from-route.service';
import {JobDetails} from '../../../../enums/model-job.type';

@Component({
  selector: 'app-job-details-infos',
  templateUrl: './job-details-infos.component.html',
  styleUrls: ['./job-details-infos.component.scss']
})
export class JobDetailsInfosComponent implements OnInit {

  public details: JobDetails;

  constructor(private route: ActivatedRoute,
              private jobsService: ModelJobsService,
              private navigatedFromRouteService: NavigatedFromRouteService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
    const id = this.route.snapshot.paramMap.get('jobId');
    this.details = this.jobsService.jobDetails(id);
  }

  ngOnInit() {
  }

}
