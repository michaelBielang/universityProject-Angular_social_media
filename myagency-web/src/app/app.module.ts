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
import {ClientRegistrationComponent} from './components/client/client-registration/client-registration.component';
import {ModelRegistrationComponent} from './components/model/model-registration/model-registration.component';
import {RegisterStartComponent} from './components/shared/register-start/register-start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {LoginModalComponent} from './components/shared/landing-page/login-modal/login-modal.component';
import {ClientLandingPageComponent} from './components/client/client-landing-page/client-landing-page.component';
import {ModelLandingPageComponent} from './components/model/model-landing-page/model-landing-page.component';
import {ModelJobItemComponent} from './components/model/model-job-overview/model-job-item/model-job-item.component';
import {ModelJobOverviewComponent} from './components/model/model-job-overview/model-job-overview.component';
import {ModelJobDetailsComponent} from './components/model/model-job-details/model-job-details.component';
import {SearchMaskComponent} from './components/client/client-search/search-mask.component';
import {SearchResultsComponent} from './components/client/client-search/search-results/search-results.component';
import {ProfileComponent} from './components/model/profile/profile.component';
import {NavigationComponent} from './components/shared/components/navigation/navigation.component';
import {ModelJobDetailsInfosComponent} from './components/model/model-job-details/model-job-details-infos/model-job-details-infos.component';
import {ChatComponent} from './components/shared/components/chat/chat.component';
import {JobDetailsContractsComponent} from './components/shared/components/job-details-contracts/job-details-contracts.component';
import {HereMapComponent} from './components/shared/components/here-map/here-map.component';
import {MessageComponent} from './components/shared/components/chat/message/message.component';
import {NewsListComponent} from './components/shared/components/news-list/news-list.component';
import {RelatedNewsComponent} from './components/model/model-landing-page/related-news/related-news.component';
import {ClientJobOverviewComponent} from './components/client/client-job-overview/client-job-overview.component';
import {ClientJobItemComponent} from './components/client/client-job-overview/client-job-item/client-job-item.component';
import {ClientCreateJobComponent} from './components/client/client-create-job/client-create-job.component';
import {ClientJobDetailsComponent} from './components/client/client-job-details/client-job-details.component';
import {ClientJobDetailsInfosComponent} from './components/client/client-job-details/client-job-details-infos/client-job-details-infos.component';
import {ClientComponent} from './components/client/client.component';
import {ModelComponent} from './components/model/model.component';
import { FeedbackComponent } from './components/shared/feedback/feedback.component';
import { LotteryComponent } from './components/shared/lottery/lottery.component';

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
    ClientRegistrationComponent,
    ModelRegistrationComponent,
    RegisterStartComponent,
    LoginModalComponent,
    ClientLandingPageComponent,
    ModelLandingPageComponent,
    ModelJobItemComponent,
    ModelJobOverviewComponent,
    ModelJobDetailsComponent,
    ModelJobDetailsInfosComponent,
    ChatComponent,
    JobDetailsContractsComponent,
    HereMapComponent,
    MessageComponent,
    SearchMaskComponent,
    SearchResultsComponent,
    ProfileComponent,
    NavigationComponent,
    ModelLandingPageComponent,
    NewsListComponent,
    RelatedNewsComponent,
    ClientJobOverviewComponent,
    ClientJobItemComponent,
    ClientCreateJobComponent,
    ClientJobDetailsComponent,
    ClientJobDetailsInfosComponent,
    ClientComponent,
    ModelComponent,
    FeedbackComponent,
    LotteryComponent
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
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginModalComponent]
})
export class AppModule {
}
