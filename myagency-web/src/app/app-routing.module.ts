import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/shared/landing-page/landing-page.component';
import {RegisterStartComponent} from './components/shared/register-start/register-start.component';
import {ModelRegistrationComponent} from './components/model/model-registration/model-registration.component';
import {ClientRegistrationComponent} from './components/client/client-registration/client-registration.component';
import {ModelLandingPageComponent} from './components/model/model-landing-page/model-landing-page.component';
import {ClientLandingPageComponent} from './components/client/client-landing-page/client-landing-page.component';
import {ModelJobOverviewComponent} from './components/model/model-job-overview/model-job-overview.component';
import {ModelJobDetailsComponent} from './components/model/model-job-details/model-job-details.component';
import {SearchMaskComponent} from './components/client/client-search/search-mask.component';
import {ProfileComponent} from './components/model/profile/profile.component';
import {ModelJobDetailsInfosComponent} from './components/model/model-job-details/model-job-details-infos/model-job-details-infos.component';
import {ChatComponent} from './components/shared/components/chat/chat.component';
import {JobDetailsContractsComponent} from './components/shared/components/job-details-contracts/job-details-contracts.component';
import {ClientJobOverviewComponent} from './components/client/client-job-overview/client-job-overview.component';
import {ClientCreateJobComponent} from './components/client/client-create-job/client-create-job.component';
import {ClientJobDetailsInfosComponent} from './components/client/client-job-details/client-job-details-infos/client-job-details-infos.component';
import {ClientJobDetailsComponent} from './components/client/client-job-details/client-job-details.component';
import {ClientComponent} from './components/client/client.component';
import {ModelComponent} from './components/model/model.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'register', component: RegisterStartComponent},
  {path: 'regModel', component: ModelRegistrationComponent},
  {path: 'regClient', component: ClientRegistrationComponent},
  {
    path: 'client',
    component: ClientComponent,
    children: [
      {path: '', component: ClientLandingPageComponent},
      {path: 'detail/:id', component: ProfileComponent},
      {path: 'search', component: SearchMaskComponent},
      {path: 'jobs', component: ClientJobOverviewComponent},
      {path: 'create-job', component: ClientCreateJobComponent},
      {
        path: 'job-details/:jobId',
        component: ClientJobDetailsComponent,
        children: [
          {path: '', redirectTo: 'infos', pathMatch: 'full'},
          {path: 'infos', component: ClientJobDetailsInfosComponent},
          {path: 'chat', component: ChatComponent},
          {path: 'contracts', component: JobDetailsContractsComponent}
        ]
      }
    ]
  },
  {
    path: 'model',
    component: ModelComponent,
    children: [
      {path: '', component: ModelLandingPageComponent},
      {path: 'jobs', component: ModelJobOverviewComponent},
      {
        path: 'job-details/:jobId',
        component: ModelJobDetailsComponent,
        children: [
          {path: '', redirectTo: 'infos', pathMatch: 'full'},
          {path: 'infos', component: ModelJobDetailsInfosComponent},
          {path: 'chat', component: ChatComponent},
          {path: 'contracts', component: JobDetailsContractsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
