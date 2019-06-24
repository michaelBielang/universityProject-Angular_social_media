import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRole} from '../../../enums/user-role.enum';
import {AuthService} from '../../../services/auth.service';
import {NavigatorService} from '../../../services/navigator.service';

@Component({
  selector: 'app-register-start',
  templateUrl: './register-start.component.html',
  styleUrls: ['./register-start.component.scss']
})
export class RegisterStartComponent implements OnInit {

  registerFormGroup: FormGroup;
  roles = [UserRole.MODEL, UserRole.CLIENT];

  passwordHide = true;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private navigatorService: NavigatorService) {
  }

  ngOnInit() {
    this.registerFormGroup = this.formBuilder.group({
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.required
      ]]
    });
  }

  get email() {
    return this.registerFormGroup.get('email');
  }

  get password() {
    return this.registerFormGroup.get('password');
  }

  get role() {
    return this.registerFormGroup.get('role');
  }

  registerAndNavigate() {
    this.authService.emailSignUp(this.email.value, this.password.value)
      .then(user => this.authService.setUserDoc(user, this.role.value))
      .then(() => this.navigatorService.goToRegistrationProfile(this.role.value));
  }
}
