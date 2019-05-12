import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountriesService} from '../../../services/countries.service';
import {AuthService} from '../../../services/auth.service';
import {NavigatorService} from '../../../services/navigator.service';
import {UserRole} from '../../../enums/user-role.enum';

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
  private role = UserRole.CLIENT;

  constructor(private formBuilder: FormBuilder,
              private countriesService: CountriesService,
              private authService: AuthService,
              private navigatorService: NavigatorService) {
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

  /**
   * signs up wit with e-mail and password
   */
  public signUp(): void {
    this.authService.emailSignUp(this.email.value, this.password.value, this.role)
      .then((value) => this.navigatorService.goToMain());
  }
}
