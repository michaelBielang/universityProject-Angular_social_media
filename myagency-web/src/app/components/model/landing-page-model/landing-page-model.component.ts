import {Component, OnInit} from '@angular/core';
import {UserNewsService} from '../../../services/user-news.service';
import {ModelTipService} from '../../../services/model/model-tip.service';
import {RelatedNewsService} from '../../../services/model/related-news.service';

@Component({
  selector: 'app-landing-page-model',
  templateUrl: './landing-page-model.component.html',
  styleUrls: ['./landing-page-model.component.scss']
})
export class LandingPageModelComponent implements OnInit {

  constructor(public userNewsService: UserNewsService,
              public modelTipService: ModelTipService,
              public relatedNewsService: RelatedNewsService) {
  }

  ngOnInit() {
  }

}
