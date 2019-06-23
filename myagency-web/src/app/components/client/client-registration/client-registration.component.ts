import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountryList} from '../../../enums/country-list';
import {AuthService} from '../../../services/auth.service';
import {NavigatorService} from '../../../services/navigator.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss']
})
export class ClientRegistrationComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  countryList: string[] = CountryList;
  profilePictureUploadReady: boolean;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private navigatorService: NavigatorService) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      companyName: ['', [Validators.required, Validators.email]],
      profilePicture: ['', Validators.required],
      companyDescription: ['', [Validators.required]],
      contact: ['', Validators.required],
      phone: ['', Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      street: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      postcode: ['', [Validators.required, Validators.minLength(2)]],
      country: ['', Validators.required]
    });
  }

  set profilePicture(picture: string[]) {
    if (picture.length > 0) {
      this.firstFormGroup.patchValue({profilePicture: picture[0]});
    }
  }

  /**
   * signs up wit with e-mail and password
   */
  public signUp(): void {
    const clientData = {...this.firstFormGroup.value, ...this.secondFormGroup.value};
    this.userService.setUserData(this.authService.user.getValue().uid, clientData)
      .then(() => this.navigatorService.goToMain());
  }
}
