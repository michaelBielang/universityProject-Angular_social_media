import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModelService} from '../../../services/model.service';
import {User} from '../../../enums/user-interface';
import {FindModelService} from "../../../services/find-model.service";

@NgModule({
  imports: [BrowserAnimationsModule],

})
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  color = 'accent';
  mode = 'indeterminate';
  searchRequest = false;
  models: User[];
  showResults = false;

  constructor(private modelService: ModelService, private findModelService: FindModelService) {
  }

  ngOnInit() {
    this.getModels();
    this.findModelService.subject.subscribe(async () => {
      this.showResults = false;
      this.searchRequest = true;
      await new Promise(resolve => setTimeout(resolve, 750));
      this.searchRequest = false;
      this.showResults = true;
    });
  }

  getModels(): void {
    this.modelService.getModels()
      .subscribe(models => this.models = models);
  }


}
