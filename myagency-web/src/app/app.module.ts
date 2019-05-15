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
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
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
import {ModelJobItemComponent} from './components/model/model-job-overview/model-job-item/model-job-item.component';
import {ModelJobOverviewComponent} from './components/model/model-job-overview/model-job-overview.component';
import {JobDetailsComponent} from './components/model/job-details/job-details.component';
import {SearchMaskComponent} from './components/client/search-mask/search-mask.component';
import {SearchResultsComponent} from './components/client/search-mask/search-results/search-results.component';
import {ProfileComponent} from './components/model/profile/profile.component';
import {NavigationComponent} from './components/shared/components/navigation/navigation.component';
import {JobDetailsInfosComponent} from './components/model/job-details/job-details-infos/job-details-infos.component';
import {JobDetailsChatComponent} from './components/model/job-details/job-details-chat/job-details-chat.component';
import {JobDetailsContractsComponent} from './components/model/job-details/job-details-contracts/job-details-contracts.component';
import {HereMapComponent} from './components/shared/components/here-map/here-map.component';
import {MessageComponent} from './components/model/job-details/job-details-chat/message/message.component';
import {NewsListComponent} from './components/shared/components/news-list/news-list.component';
import {RelatedNewsComponent} from './components/model/landing-page-model/related-news/related-news.component';
import {ClientJobOverviewComponent} from './components/client/client-job-overview/client-job-overview.component';
import {ClientJobItemComponent} from './components/client/client-job-overview/client-job-item/client-job-item.component';

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
    ModelJobItemComponent,
    ModelJobOverviewComponent,
    JobDetailsComponent,
    JobDetailsInfosComponent,
    JobDetailsChatComponent,
    JobDetailsContractsComponent,
    HereMapComponent,
    MessageComponent,
    SearchMaskComponent,
    SearchResultsComponent,
    ProfileComponent,
    NavigationComponent,
    LandingPageModelComponent,
    NewsListComponent,
    RelatedNewsComponent,
    ClientJobOverviewComponent,
    ClientJobItemComponent
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
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatSnackBarModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginModalComponent]
})
export class AppModule {
}
