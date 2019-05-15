import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {CountriesService} from '../../../services/countries.service';
import {NavigatorService} from '../../../services/navigator.service';
import {UserRole} from '../../../enums/user-role.enum';


@Component({
  selector: 'app-registration-model',
  templateUrl: './model-registration.component.html',
  styleUrls: ['./model-registration.component.scss']
})
export class ModelRegistrationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  countryList: string[];
  titles = ['Mr.', 'Mrs'];
  eyes = ['Blue.', 'Green', 'Brown'];
  hairColors = ['Blond.', 'Brunette', 'Black'];
  clothesSize = ['S', 'M', 'L', 'XL'];
  heights = Array.from({length: (210 - 150)}, (value, key) => key + 150);
  bustMeasurement = Array.from({length: (100 - 50)}, (value, key) => key + 50);
  waistMeasurement = Array.from({length: (90 - 40)}, (value, key) => key + 40);
  hipMeasurement = Array.from({length: (100 - 50)}, (value, key) => key + 50);
  date = new Date().getFullYear();
  ages = Array.from({length: 50}, (value, key) => this.date - 50);
  private role = UserRole.MODEL;

  constructor(public formBuilder: FormBuilder,
              public authService: AuthService,
              private countryService: CountriesService,
              private navigatorService: NavigatorService) {
    this.countryList = countryService.countries;
  }

  ngOnInit() {
    // First Step
    this.firstFormGroup = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email]],
      password: ['', [
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
      ]],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required]
    });

    // Second Step
    this.secondFormGroup = this.formBuilder.group({
      street: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      postcode: ['', [Validators.required, Validators.minLength(2)]]
    });
  }


  get email() {
    return this.firstFormGroup.get('email');
  }

  get lastName() {
    return this.firstFormGroup.get('lastName');
  }

  get firstName() {
    return this.firstFormGroup.get('firstName');
  }

  get password() {
    return this.firstFormGroup.get('password');
  }

  get city() {
    return this.secondFormGroup.get('city');
  }


  get postcode() {
    return this.secondFormGroup.get('postcode');
  }


  get street() {
    return this.secondFormGroup.get('street');
  }

  /**
   * signs up wit with e-mail and password
   */
  public signUp(): void {
    this.authService.emailSignUp(this.email.value, this.password.value, this.role)
      .then((value) => this.navigatorService.goToMain());
  }
}
