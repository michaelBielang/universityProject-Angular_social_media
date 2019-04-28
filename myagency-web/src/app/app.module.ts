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
  MatSelectModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {RegistrationClientComponent} from './components/client/registration-client/registration-client.component';
import {RegistrationModelComponent} from './components/model/registration-model/registration-model.component';
import {RegisterStartComponent} from './components/shared/register-start/register-start.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {NotifyService} from './services/notify.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

const config = {
  apiKey: 'AIzaSyAxeq6ggYW5LBGdwXoJO0sTC-a0R_3fKUg',
  authDomain: 'myagency-b6072.firebaseapp.com',
  databaseURL: 'https://myagency-b6072.firebaseio.com',
  projectId: 'myagency-b6072',
  storageBucket: 'myagency-b6072.appspot.com',
  messagingSenderId: '546859213991'
};

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TeamMembersComponent,
    RegistrationClientComponent,
    RegistrationModelComponent,
    RegisterStartComponent,
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
    MatInputModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(config),
    MatSelectModule,
  ],
  providers: [AuthService, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
