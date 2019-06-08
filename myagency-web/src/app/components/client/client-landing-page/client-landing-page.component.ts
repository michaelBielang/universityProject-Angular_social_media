import {Component, OnInit} from '@angular/core';
import {UserNewsService} from '../../../services/user-news.service';

@Component({
  selector: 'client-landing-page',
  templateUrl: './client-landing-page.component.html',
  styleUrls: ['./client-landing-page.component.scss']
})
export class ClientLandingPageComponent implements OnInit {

  constructor(public userNewsService: UserNewsService) {
  }

  ngOnInit() {
  }

}
