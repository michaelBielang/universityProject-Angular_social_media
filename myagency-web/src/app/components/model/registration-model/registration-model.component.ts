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
  detailForm: FormGroup;

  constructor(public fb: FormBuilder, public auth: AuthService) {
  }

  ngOnInit() {
    // First Step
    this.firstFormGroup = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
      ]],
      'name': ['',],
      'age': ['', []],
      'height': ['', []]
    });

    // Second Step
    this.detailForm = this.fb.group({
      'catchPhrase': ['', [Validators.required]]
    });

  }

  // Using getters will make your code look pretty
  get email() {
    return this.firstFormGroup.get('email')
  }

  get password() {
    return this.firstFormGroup.get('password')
  }

  get catchPhrase() {
    return this.detailForm.get('catchPhrase')
  }


  // Step 1
  signup() {
    console.log("reached singup")
    return this.auth.emailSignUp(this.email.value, this.password.value)
  }

  // Step 2
  setCatchPhrase(user) {
    console.log("received");
    return this.auth.updateUser(user, {catchPhrase: this.catchPhrase.value})
  }
}
