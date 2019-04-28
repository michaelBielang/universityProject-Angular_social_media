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
  countryList: string[];
  titles = ['Mr.', 'Mrs'];

  constructor(private formBuilder: FormBuilder, countriesService: CountriesService,
              private authService: AuthService) {
    this.countryList = countriesService.countries;
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Second Step
    this.secondFormGroup = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  get email() {
    return this.firstFormGroup.get('email');
  }

  get content() {
    return this.secondFormGroup.get('content');
  }

  get countries() {
    return this.countryList;
  }

  get password() {
    return this.firstFormGroup.get('password');
  }

  signup() {
    return this.authService.emailSignUp(this.email.value, this.password.value);
  }

// relevant after MVP
  /*
  https://angular.io/guide/reactive-forms
  moveToSelectedTab(tabName: string) {
      for (let i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
        if ((document.querySelectorAll('.mat-tab-label-content')[i] as HTMLElement).innerText === tabName) {
          (document.querySelectorAll('.mat-tab-label')[i] as HTMLElement).click();
        }
      }
    }*/


}

