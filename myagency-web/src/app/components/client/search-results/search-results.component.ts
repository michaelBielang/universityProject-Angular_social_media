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
  private showResults = false;

  constructor(private modelService: ModelService, private findModelService: FindModelService) {
    this.getModels();
  }

  ngOnInit() {
    this.findModelService.subject.subscribe(async (callSource) => {
      console.log('source: ' + callSource);
      if (callSource === 'profile') {
        console.log("here");
        await new Promise(resolve => setTimeout(resolve, 750));
        console.log("here2");
        console.log(this.models.length);
        this.showResults = false;
        this.showResults = true;
      } else {
        console.log("here3");
        this.showResults = false;
        this.searchRequest = true;
        await new Promise(resolve => setTimeout(resolve, 750));
        this.searchRequest = false;
        this.showResults = true;
      }
    });
  }

  getModels(): void {
    this.modelService.getModels()
      .subscribe(models => this.models = models);
  }


}
