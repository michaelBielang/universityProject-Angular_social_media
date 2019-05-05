import {Component} from '@angular/core';
import {NavigatedFromRouteService} from './navigated-from-route.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {

  constructor(private navigatedFromRouteService: NavigatedFromRouteService,
              private location: Location,
              private router: Router) {
  }

  public navigateBack(): void {
    if (!!this.navigatedFromRouteService.getPreviousUrl()) {
      console.log('navigated back to: ', this.navigatedFromRouteService.getPreviousUrl());
      this.router.navigateByUrl(this.navigatedFromRouteService.getPreviousUrl());
    } else {
      this.router.navigateByUrl('/model');
    }
  }

}
