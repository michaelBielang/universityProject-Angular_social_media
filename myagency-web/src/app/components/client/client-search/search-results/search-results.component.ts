import {Component, Input, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {User} from '../../../../enums/user-interface';
import {FindModelService} from '../../../../services/find-model.service';
import {ClientJobsService} from '../../../../services/client/client-jobs.service';
import {UserService} from '../../../../services/user.service';
import {MatSnackBar} from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule],

})
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input()
  public selectedJobId: string;

  private color = 'accent';
  private mode = 'indeterminate';
  private searchRequest = false;
  private models: User[];

  constructor(private userService: UserService, private findModelService: FindModelService,
              private clientJobService: ClientJobsService,
              private snackBar: MatSnackBar) {
    userService.models().subscribe(models => {
      this.models = models;
    });
  }

  getShowResults() {
    return this.findModelService.showResults;
  }

  getShowProgress() {
    return this.findModelService.showProgress;
  }

  saveModel(uid: string) {
    const addingPromise = this.clientJobService.addModelToJob(uid, this.selectedJobId);
    this.snackBar.open('Model added to Job', 'UNDO', {
      duration: 2000,
    }).onAction().subscribe(() => {
      addingPromise.then(() => this.clientJobService.deleteModelFromJob(uid, this.selectedJobId));
    });
  }
}
