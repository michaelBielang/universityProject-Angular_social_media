import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavigatorService} from '../../../services/navigator.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {


  private mailFormGroup: FormGroup;

  private feedbackFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private navigatorService: NavigatorService,
              private fireStore: AngularFirestore) {
  }

  ngOnInit() {
    this.feedbackFormGroup = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      register: ['', [Validators.required, Validators.minLength(15)]],
      jobCreation: ['', [Validators.required, Validators.minLength(15)]],
      jobView: ['', [Validators.required, Validators.minLength(15)]],
      principleIdea: ['', [Validators.required, Validators.minLength(15)]],
      general: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  public sendFeedback() {
    const feedback = this.feedbackFormGroup.value;
    this.fireStore.collection('gewinnspiel').doc(feedback.mail).set(feedback);
    this.navigatorService.goToMain();
  }

}
