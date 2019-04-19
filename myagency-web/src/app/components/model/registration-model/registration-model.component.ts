import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-registration-model',
  templateUrl: './registration-model.component.html',
  styleUrls: ['./registration-model.component.scss']
})


export class RegistrationModelComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService) {
  }

  ngOnInit() {
    // First Step
    this.firstFormGroup = this.formBuilder.group({
      /*    'email': ['', [
            Validators.required,
            Validators.email]],
          'password': ['', [
            Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
            Validators.minLength(6),
            Validators.maxLength(25),
            Validators.required
          ]],*/
      'name': ['',],
      'surname': ['',],
      'age': ['', [Validators.required, Validators.minLength(2)]]
    });

    // Second Step
    this.secondFormGroup = this.formBuilder.group({
      'street': ['', [Validators.required, Validators.minLength(2)]]
    });

    // Third Step
    this.thirdFormGroup = this.formBuilder.group({
      'height': ['', [Validators.required]],
      'haircolor': ['', [Validators.required]],
      'taint': ['', [Validators.required]]
    });
  }

  // Using getters will make your code look pretty
  get email() {
    //TODO
    return this.firstFormGroup.get('age')
  }

  get name() {
    //TODO
    return this.firstFormGroup.get('name')
  }

  get street() {
    //TODO
    return this.firstFormGroup.get('street')
  }

  get surname() {
    //TODO
    return this.firstFormGroup.get('surname')
  }

  get password() {
    //TODO
    return this.firstFormGroup.get('age')
  }

  get taint() {
    //TODO
    return this.firstFormGroup.get('age')
  }

  get height() {
    return this.thirdFormGroup.get('height')
  }

  get haircolor() {
    return this.thirdFormGroup.get('haircolor')
  }

  // Step 1
  signup() {
    console.log("reached singup");
    return this.authService.emailSignUp(this.email.value, this.password.value)
  }
}
