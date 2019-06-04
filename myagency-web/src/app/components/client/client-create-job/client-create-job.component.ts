import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientJobsService} from '../../../services/client/client-jobs.service';
import {ClientJob} from '../../../enums/client-job-interface';
import {NavigatorService} from '../../../services/navigator.service';
import {AuthService} from '../../../services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-client-create-job',
  templateUrl: './client-create-job.component.html',
  styleUrls: ['./client-create-job.component.scss']
})
export class ClientCreateJobComponent implements OnInit {

  jobFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private clientJobService: ClientJobsService,
              private navigatorService: NavigatorService,
              private authService: AuthService,
              private angularFirestore: AngularFirestore) {
  }

  ngOnInit() {
    this.jobFormGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]]
    });
  }

  createJob(): void {
    const job: ClientJob = {
      jobId: this.angularFirestore.createId(),
      clientId: this.authService.user.getValue().uid,
      title: this.jobFormGroup.get('title').value,
      description: this.jobFormGroup.get('description').value,
      location: this.jobFormGroup.get('location').value,
      models: []
    };
    this.clientJobService.addJob(job);
    this.navigatorService.goToMain();
  }

}
