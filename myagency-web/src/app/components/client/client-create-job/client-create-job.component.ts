import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientJobsService} from '../../../services/client/client-jobs.service';
import {Job} from '../../../enums/client-job-interface';
import {NavigatorService} from '../../../services/navigator.service';

@Component({
  selector: 'app-client-create-job',
  templateUrl: './client-create-job.component.html',
  styleUrls: ['./client-create-job.component.scss']
})
export class ClientCreateJobComponent implements OnInit {

  jobFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientJobService: ClientJobsService,
              private navigatorService: NavigatorService) {
  }

  ngOnInit() {
    this.jobFormGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      budget: ['', Validators.required]
    });
  }

  createJob(): void {
    const job: Job = {
      title: this.jobFormGroup.get('title').value,
      description: this.jobFormGroup.get('description').value,
      location: this.jobFormGroup.get('location').value,
      budget: this.jobFormGroup.get('budget').value
    };
    this.clientJobService.addJob(job);
    this.navigatorService.goToMain();
  }

}
