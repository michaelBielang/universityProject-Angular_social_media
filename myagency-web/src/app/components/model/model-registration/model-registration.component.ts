import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {NavigatorService} from '../../../services/navigator.service';
import {CountryList} from '../../../enums/country-list';
import {UserService} from '../../../services/user.service';


@Component({
  selector: 'app-registration-model',
  templateUrl: './model-registration.component.html',
  styleUrls: ['./model-registration.component.scss']
})
export class ModelRegistrationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  countryList: string[] = CountryList;
  titles = ['Mr.', 'Mrs'];
  eyes = ['Blue', 'Green', 'Brown'];
  hairColors = ['Blond', 'Brunette', 'Black'];
  clothesSize = ['XS', 'S', 'M', 'L'];
  heights = Array.from({length: (200 - 160)}, (value, key) => key + 160);
  bustMeasurement = Array.from({length: (120 - 50)}, (value, key) => key + 50);
  waistMeasurement = Array.from({length: (90 - 40)}, (value, key) => key + 40);
  hipMeasurement = Array.from({length: (120 - 50)}, (value, key) => key + 50);
  shoeMeasurement = Array.from({length: (45 - 37)}, (value, key) => key + 37);
  profilePictureUploadReady: boolean;
  polariodsPictureUploadReady: boolean;
  sedCardPictureUploadReady: boolean;


  constructor(public formBuilder: FormBuilder,
              public authService: AuthService,
              private navigatorService: NavigatorService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      birthday: ['', Validators.required]
    });

    this.secondFormGroup = this.formBuilder.group({
      street: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      postcode: ['', [Validators.required, Validators.minLength(2)]],
      country: ['', Validators.required]
    });

    this.thirdFormGroup = this.formBuilder.group({
      height: ['', Validators.required],
      hairColor: ['', Validators.required],
      eyeColor: ['', Validators.required],
      clothesSize: ['', Validators.required],
      hipSize: ['', Validators.required],
      waistSize: ['', Validators.required],
      bustSize: ['', Validators.required],
      shoeSize: ['', Validators.required]
    });

    this.fourthFormGroup = this.formBuilder.group({
      profilePicture: ['', Validators.required],
      polaroids: this.formBuilder.array([]),
      sedCard: this.formBuilder.array([this.formBuilder.control('')])
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

  set profilePicture(picture: string[]) {
    if (picture.length > 0) {
      this.fourthFormGroup.patchValue({profilePicture: picture[0]});
    }
  }

  set polaroids(pictures: string[]) {
    this.fourthFormGroup.setControl('polaroids', this.formBuilder.array(pictures));
  }

  set sedCard(pictures: string[]) {
    debugger;
    this.fourthFormGroup.setControl('sedCard', this.formBuilder.array(pictures));
  }

  public uploadInProgress(): boolean {
    return !(this.polariodsPictureUploadReady && this.profilePictureUploadReady && this.sedCardPictureUploadReady);
  }

  /**
   * signs up wit with e-mail and password
   */
  public finish(): void {
    const modelData = {...this.firstFormGroup.value, ...this.secondFormGroup.value, ...this.thirdFormGroup.value, ...this.fourthFormGroup.value};
    debugger;
    this.userService.setUserData(this.authService.user.getValue().uid, modelData)
      .then(() => this.navigatorService.goToMain());
  }
}
