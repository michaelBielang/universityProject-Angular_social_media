import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModelService} from '../../../services/model.service';
import {User} from '../../../enums/user-interface';
import {FindModelService} from '../../../services/find-model.service';

@NgModule({
  imports: [BrowserAnimationsModule],

})
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  private color = 'accent';
  private mode = 'indeterminate';
  private searchRequest = false;
  private models: User[];

  constructor(private modelService: ModelService, private findModelService: FindModelService) {
  }

  ngOnInit() {
    this.getModels();
  }

  getShowResults() {
    return this.findModelService.showResults;
  }

  getShowProgress() {
    return this.findModelService.showProgress;
  }


  getModels(): void {
    this.modelService.getModels()
      .subscribe(models => this.models = models);
  }


}
