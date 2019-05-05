import {Component, OnInit} from '@angular/core';
import {NavigatedFromRouteService} from '../navigated-from-route.service';

@Component({
  selector: 'app-job-details-chat',
  templateUrl: './job-details-chat.component.html',
  styleUrls: ['./job-details-chat.component.scss']
})
export class JobDetailsChatComponent implements OnInit {

  constructor(private navigatedFromRouteService: NavigatedFromRouteService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
  }

  ngOnInit() {
  }

}
