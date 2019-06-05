import {Component, OnInit} from '@angular/core';
import {NavigatedFromRouteService} from '../../../../services/navigated-from-route.service';

@Component({
  selector: 'app-job-details-contracts',
  templateUrl: './job-details-contracts.component.html',
  styleUrls: ['./job-details-contracts.component.scss']
})
export class JobDetailsContractsComponent implements OnInit {

  constructor(private navigatedFromRouteService: NavigatedFromRouteService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
  }

  ngOnInit() {
  }

}
