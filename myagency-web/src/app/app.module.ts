import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {TeamMembersComponent} from './components/landing-page/team-members/team-members.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TeamMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
