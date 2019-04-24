import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<LoginModalComponent>,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   * login per mail
   */
  public mailLogin() {
    this.authService.emailLogin(this.email.value, this.password.value)
      .then((value: any) => console.log('logged in', value))
      .catch((reason: any) => console.log('error: ', reason));

  }

  get email() {
    return this.loginFormGroup.get('email');
  }

  get password() {
    return this.loginFormGroup.get('password');
  }

  public getMailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
