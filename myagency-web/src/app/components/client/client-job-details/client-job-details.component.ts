import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {NavigatorService} from '../../../services/navigator.service';
import {NavigatedFromRouteService} from '../../../services/navigated-from-route.service';

@Component({
  selector: 'job-details',
  templateUrl: './client-job-details.component.html',
  styleUrls: ['./client-job-details.component.scss']
})
export class ClientJobDetailsComponent {

  constructor(private navigatedFromRouteService: NavigatedFromRouteService,
              private location: Location,
              private router: Router,
              private navigatorService: NavigatorService) {
  }

  public navigateBack(): void {
    if (!!this.navigatedFromRouteService.getPreviousUrl()) {
      this.router.navigateByUrl(this.navigatedFromRouteService.getPreviousUrl());
    } else {
      this.navigatorService.goToMain();
    }
  }

}
