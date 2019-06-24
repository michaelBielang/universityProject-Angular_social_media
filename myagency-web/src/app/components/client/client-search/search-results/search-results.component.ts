import {Component, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Model} from '../../../../enums/user-interface';
import {FindModelService} from '../../../../services/find-model.service';
import {UserService} from '../../../../services/user.service';

@NgModule({
  imports: [BrowserAnimationsModule],

})
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  private color = 'accent';
  private mode = 'indeterminate';
  private searchRequest = false;
  private models: Model[];

  constructor(private userService: UserService,
              private findModelService: FindModelService) {
    userService.models().subscribe((models: Model[]) => {
      this.models = models;
      console.log('new models');
    });
  }

  getShowResults() {
    return this.findModelService.showResults;
  }

  getShowProgress() {
    return this.findModelService.showProgress;
  }
}
