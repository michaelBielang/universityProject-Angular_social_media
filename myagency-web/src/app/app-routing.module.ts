import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/shared/landing-page/landing-page.component';
import {RegisterStartComponent} from './components/shared/register-start/register-start.component';
import {ModelRegistrationComponent} from './components/model/model-registration/model-registration.component';
import {ClientRegistrationComponent} from './components/client/client-registration/client-registration.component';
import {ModelLandingPageComponent} from './components/model/model-landing-page/model-landing-page.component';
import {ClientLandingPageComponent} from './components/client/client-landing-page/client-landing-page.component';
import {ModelJobOverviewComponent} from './components/model/model-job-overview/model-job-overview.component';
import {JobDetailsComponent} from './components/model/job-details/job-details.component';
import {SearchMaskComponent} from './components/client/search-mask/search-mask.component';
import {ProfileComponent} from './components/model/profile/profile.component';
import {JobDetailsInfosComponent} from './components/model/job-details/job-details-infos/job-details-infos.component';
import {JobDetailsChatComponent} from './components/model/job-details/job-details-chat/job-details-chat.component';
import {JobDetailsContractsComponent} from './components/model/job-details/job-details-contracts/job-details-contracts.component';
import {ClientJobOverviewComponent} from './components/client/client-job-overview/client-job-overview.component';
import {ClientCreateJobComponent} from "./components/client/client-create-job/client-create-job.component";

const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'register', component: RegisterStartComponent},
  {path: 'regModel', component: ModelRegistrationComponent},
  {path: 'regClient', component: ClientRegistrationComponent},
  {
    path: 'client',
    children: [
      {path: '', component: ClientLandingPageComponent},
      {path: 'detail/:id', component: ProfileComponent},
      {path: 'search', component: SearchMaskComponent},
      {path: 'jobs', component: ClientJobOverviewComponent},
      {path: 'create-job', component: ClientCreateJobComponent}
    ]
  },
  {
    path: 'model',
    children: [
      {path: '', component: ModelLandingPageComponent},
      {path: 'jobs', component: ModelJobOverviewComponent},
      {
        path: 'job-details/:jobId',
        component: JobDetailsComponent,
        children: [
          {path: '', redirectTo: 'infos', pathMatch: 'full'},
          {path: 'infos', component: JobDetailsInfosComponent},
          {path: 'chat', component: JobDetailsChatComponent},
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
