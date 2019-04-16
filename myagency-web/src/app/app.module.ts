import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingPageComponent} from './components/shared/landing-page/landing-page.component';
import {TeamMembersComponent} from './components/shared/landing-page/team-members/team-members.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {RegistrationClientComponent} from './components/model/registration-client/registration-client.component';
import {RegistrationModelComponent} from './components/client/registration-model/registration-model.component';
import {RegisterStartComponent} from './components/shared/register-start/register-start.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TeamMembersComponent,
    RegistrationClientComponent,
    RegistrationModelComponent,
    RegisterStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
