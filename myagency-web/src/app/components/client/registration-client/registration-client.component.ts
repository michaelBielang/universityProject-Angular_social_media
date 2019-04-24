import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountriesService} from '../../../services/countries.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-registration-client',
  templateUrl: './registration-client.component.html',
  styleUrls: ['./registration-client.component.scss']
})
export class RegistrationClientComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  countryList: String[];
  titles = ['Mr.', 'Mrs'];

  constructor(private _formBuilder: FormBuilder, countriesService: CountriesService,
              private _authService: AuthService) {
    this.countryList = countriesService.countries;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required, Validators.email],
      content: ['', Validators.required, Validators.minLength(1)],
      password: ['', Validators.required, Validators.minLength(1)]
    });

    // Second Step
    this.secondFormGroup = this._formBuilder.group({
      email: ['', Validators.required, Validators.email],
      content: ['', Validators.required, Validators.minLength(1)],
      password: ['', Validators.required, Validators.minLength(1)]
    });
  }

  get email() {
    return this.firstFormGroup.get('email');
  }

  get content() {
    return this.firstFormGroup.get('content');
  }

  get countries() {
    return this.countryList;
  }

  get password() {
    return this.firstFormGroup.get('password');
  }

  signup() {
    return this._authService.emailSignUp(this.email.value, this.password.value);
  }

}

