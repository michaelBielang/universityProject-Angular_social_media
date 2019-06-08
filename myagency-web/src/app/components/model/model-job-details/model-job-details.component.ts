import {Component} from '@angular/core';
import {NavigatedFromRouteService} from '../../../services/navigated-from-route.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {NavigatorService} from '../../../services/navigator.service';

@Component({
  selector: 'job-details',
  templateUrl: './model-job-details.component.html',
  styleUrls: ['./model-job-details.component.scss']
})
export class ModelJobDetailsComponent {

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
