import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/shared/landing-page/landing-page.component';
import {RegisterStartComponent} from "./components/shared/register-start/register-start.component";
import {RegistrationModelComponent} from "./components/model/registration-model/registration-model.component";
import {RegistrationClientComponent} from "./components/client/registration-client/registration-client.component";
import {MatInputModule} from "@angular/material";

const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'register', component: RegisterStartComponent},
  {path: 'regModel', component: RegistrationModelComponent},
  {path: 'regClient', component: RegistrationClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
