import {Component, OnInit} from '@angular/core';
import {UserNewsService} from '../../../services/user-news.service';
import {ModelTipService} from '../../../services/model/model-tip.service';
import {RelatedNewsService} from '../../../services/model/related-news.service';

@Component({
  selector: 'model-landing-page',
  templateUrl: './model-landing-page.component.html',
  styleUrls: ['./model-landing-page.component.scss']
})
export class ModelLandingPageComponent implements OnInit {

  constructor(public userNewsService: UserNewsService,
              public modelTipService: ModelTipService,
              public relatedNewsService: RelatedNewsService) {
  }

  ngOnInit() {
  }

}
