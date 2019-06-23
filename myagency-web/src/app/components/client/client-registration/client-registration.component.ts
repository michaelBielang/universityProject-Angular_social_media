import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountryList} from '../../../enums/country-list';
import {AuthService} from '../../../services/auth.service';
import {NavigatorService} from '../../../services/navigator.service';

@Component({
  selector: 'client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  countryList: string[] = CountryList;
  titles = ['Mr.', 'Mrs'];

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private navigatorService: NavigatorService) {
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

  /**
   * signs up wit with e-mail and password
   */
  public signUp(): void {
    this.navigatorService.goToMain();
  }
}
