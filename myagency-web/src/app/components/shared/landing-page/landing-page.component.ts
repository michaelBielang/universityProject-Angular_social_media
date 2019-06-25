import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginModalComponent} from './login-modal/login-modal.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  public clientJoin = ['Fast', 'Quality Models', 'Wider Choice', 'Low fees', 'Direct Contact with the Model', 'Worldwide'];
  public modelJoin = ['More Job Opportunities', 'Trusted Quality Clients', 'Model’s Voice, Model’s Choice', 'Tips & Tricks',
    'Transparency', 'Direct Contact with Clients'];

  constructor(public dialog: MatDialog) {
  }

  /**
   * opens the login modal
   */
  public openDialog() {
    this.dialog.open(LoginModalComponent);
  }
}
