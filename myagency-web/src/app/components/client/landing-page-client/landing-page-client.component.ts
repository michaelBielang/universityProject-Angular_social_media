import {Component, OnInit} from '@angular/core';
import {UserNewsService} from '../../../services/user-news.service';

@Component({
  selector: 'app-landing-page-client',
  templateUrl: './landing-page-client.component.html',
  styleUrls: ['./landing-page-client.component.scss']
})
export class LandingPageClientComponent implements OnInit {

  constructor(public userNewsService: UserNewsService) {
  }

  ngOnInit() {
  }

}
