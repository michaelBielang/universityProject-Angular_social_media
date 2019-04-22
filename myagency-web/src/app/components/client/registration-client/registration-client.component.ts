import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountriesService} from "../../../services/countries.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-registration-client',
  templateUrl: './registration-client.component.html',
  styleUrls: ['./registration-client.component.scss']
})
export class RegistrationClientComponent implements OnInit {

  formGroup: FormGroup;
  countryList: String[];

  constructor(private _formBuilder: FormBuilder, countriesService: CountriesService,
              private authService: AuthService) {
    this.countryList = countriesService.countries;
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      email: ['', Validators.required, Validators.email],
      content: ['', Validators.required, Validators.minLength(1)],
      password: ['', Validators.required, Validators.minLength(1)]
    });
  }

  get email() {
    return this.formGroup.get('email')
  }

  get content() {
    return this.formGroup.get('content')
  }

  get countries() {
    return this.countryList
  }

  get password() {
    return this.formGroup.get('password')
  }

  signup() {
    return this.authService.emailSignUp(this.email.value, this.password.value)
  }

}

