import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/shared/landing-page/landing-page.component';
import {RegisterStartComponent} from './components/shared/register-start/register-start.component';
import {RegistrationModelComponent} from './components/model/registration-model/registration-model.component';
import {RegistrationClientComponent} from './components/client/registration-client/registration-client.component';
import {LandingPageModelComponent} from './components/model/landing-page-model/landing-page-model.component';
import {LandingPageClientComponent} from './components/client/landing-page-client/landing-page-client.component';
import {JobOverviewComponent} from './components/model/job-overview/job-overview.component';
import {JobDetailsComponent} from './components/model/job-details/job-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'register', component: RegisterStartComponent},
  {path: 'regModel', component: RegistrationModelComponent},
  {path: 'regClient', component: RegistrationClientComponent},
  {
    path: 'client',
    children: [
      {path: '', component: LandingPageClientComponent}
    ]
  },
  {
    path: 'model',
    children: [
      {path: '', component: LandingPageModelComponent},
      {path: 'jobs', component: JobOverviewComponent},
      {path: 'job-details/:id', component: JobDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
