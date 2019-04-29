import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModelService} from '../../../services/model.service';
import {User} from '../../../enums/user-interface';

@NgModule({
  imports: [BrowserAnimationsModule],

})
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  searchRequest = false;
  models: User[];
  showResults = true;

  constructor(private modelService: ModelService) {
  }

  ngOnInit() {
    this.getModels();
  }

  getModels(): void {
    this.modelService.getModels()
      .subscribe(models => this.models = models);
  }


}
