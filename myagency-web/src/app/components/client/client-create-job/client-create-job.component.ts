import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientJobsService} from '../../../services/client/client-jobs.service';
import {Job} from '../../../enums/job.type';
import {NavigatorService} from '../../../services/navigator.service';
import {AuthService} from '../../../services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

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
              private fireStore: AngularFirestore,
              private router: Router) {
  }

  ngOnInit() {
    this.jobFormGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]]
    });
  }

  createJob(): void {
    const uid = this.fireStore.createId();
    const job: Job = {
      uid,
      clientId: this.authService.user.getValue().uid,
      title: this.jobFormGroup.get('title').value,
      description: this.jobFormGroup.get('description').value,
      location: this.jobFormGroup.get('location').value
    };
    this.clientJobService.addJob(job);
    this.router.navigate(['client', 'search'], {state: {data: {createdJobId: job.uid}}});
  }

}
