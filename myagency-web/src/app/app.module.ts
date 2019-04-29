import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingPageComponent} from './components/shared/landing-page/landing-page.component';
import {TeamMembersComponent} from './components/shared/landing-page/team-members/team-members.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {RegistrationClientComponent} from './components/client/registration-client/registration-client.component';
import {RegistrationModelComponent} from './components/model/registration-model/registration-model.component';
import {RegisterStartComponent} from './components/shared/register-start/register-start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {LoginModalComponent} from './components/shared/landing-page/login-modal/login-modal.component';
import {LandingPageClientComponent} from './components/client/landing-page-client/landing-page-client.component';
import {LandingPageModelComponent} from './components/model/landing-page-model/landing-page-model.component';
import {SearchMaskComponent} from './components/client/search-mask/search-mask.component';
import {SearchResultsComponent} from './components/client/search-results/search-results.component';
import { ProfileComponent } from './components/model/profile/profile.component';

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
    LoginModalComponent,
    LandingPageClientComponent,
    LandingPageModelComponent,
    SearchMaskComponent,
    SearchResultsComponent,
    ProfileComponent
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
    MatSelectModule,
    MatDialogModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(config),
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginModalComponent]
})
export class AppModule {
}
