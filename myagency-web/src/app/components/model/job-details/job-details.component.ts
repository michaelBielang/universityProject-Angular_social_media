import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobDetails, JobsService} from '../../../services/jobs.service';

@Component({
  selector: 'job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  public details: JobDetails;

  constructor(private route: ActivatedRoute,
              private jobsService: JobsService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.details = this.jobsService.jobDetails(id);
  }

  ngOnInit() {
  }

}
