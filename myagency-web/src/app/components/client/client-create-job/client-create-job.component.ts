import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-create-job',
  templateUrl: './client-create-job.component.html',
  styleUrls: ['./client-create-job.component.scss']
})
export class ClientCreateJobComponent implements OnInit {

  jobFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.jobFormGroup = this.formBuilder.group({
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      budget: ['', Validators.required]
    });

  }

}
