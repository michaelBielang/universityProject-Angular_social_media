import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<LoginModalComponent>) {
  }

  ngOnInit(): void {
    this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  /**
   * login per mail
   */
  public mailLogin() {
    this.dialogRef.close(this.loginFormGroup.value);
  }

  get emailFormControl() {
    return this.loginFormGroup.get('email');
  }

  get passwordFormControl() {
    return this.loginFormGroup.get('password');
  }

}
