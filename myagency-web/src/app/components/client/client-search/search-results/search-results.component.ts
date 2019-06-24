import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../../../enums/user-interface';
import {FindModelService} from '../../../../services/find-model.service';
import {MatSnackBar} from '@angular/material';
import {ClientJobsService} from '../../../../services/client/client-jobs.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input()
  public selectedJobId: string;

  private spinnerColor = 'accent';
  private spinnerMode = 'indeterminate';

  private models: Model[];

  constructor(private findModelService: FindModelService,
              private snackBar: MatSnackBar,
              private clientJobService: ClientJobsService) {
  }

  ngOnInit(): void {
    this.findModelService.modelSearch().subscribe((models: Model[]) => {
      this.models = models;
    });
  }

  getShowResults() {
    return this.findModelService.showResults;
  }

  getShowProgress() {
    return this.findModelService.showProgress;
  }

  saveModel(uid: string, jobId: string) {
    const addingPromise = this.clientJobService.addModelToJob(uid, jobId);
    this.snackBar.open('Model added to Job', 'UNDO', {
      duration: 2000,
    }).onAction().subscribe(() => {
      addingPromise.then(() => this.clientJobService.deleteModelFromJob(uid, jobId));
    });
  }
}
