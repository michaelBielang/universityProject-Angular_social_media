import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/shared/landing-page/landing-page.component';
import {RegisterStartComponent} from './components/shared/register-start/register-start.component';
import {RegistrationModelComponent} from './components/model/registration-model/registration-model.component';
import {RegistrationClientComponent} from './components/client/registration-client/registration-client.component';
import {LandingPageModelComponent} from './components/model/landing-page-model/landing-page-model.component';
import {LandingPageClientComponent} from './components/client/landing-page-client/landing-page-client.component';
import {SearchMaskComponent} from './components/client/search-mask/search-mask.component';
import {ProfileComponent} from './components/model/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'register', component: RegisterStartComponent},
  {path: 'regModel', component: RegistrationModelComponent},
  {path: 'regClient', component: RegistrationClientComponent},
  {
    path: 'client',
    children: [
      {path: '', component: LandingPageClientComponent},
      {path: 'detail/:id', component: ProfileComponent},
      {path: 'search', component: SearchMaskComponent},
    ]
  },
  {
    path: 'model',
    children: [
      {path: '', component: LandingPageModelComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
