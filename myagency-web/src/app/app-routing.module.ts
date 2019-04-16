import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/shared/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
