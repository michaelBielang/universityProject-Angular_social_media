import {Component, OnInit} from '@angular/core';
import {FindModelService} from '../../../services/find-model.service';
import {ClientJobsService} from '../../../services/client/client-jobs.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-search-mask',
  templateUrl: './search-mask.component.html',
  styleUrls: ['./search-mask.component.scss']
})

export class SearchMaskComponent implements OnInit {

  eyes = ['Blue.', 'Green', 'Brown'];
  hairColors = ['Blond.', 'Brunette', 'Black'];
  clothesSize = ['S', 'M', 'L', 'XL'];
  heights = Array.from({length: (210 - 150)}, (value, key) => key + 150);
  bustMeasurement = Array.from({length: (100 - 50)}, (value, key) => key + 50);
  waistMeasurement = Array.from({length: (90 - 40)}, (value, key) => key + 40);
  hipMeasurement = Array.from({length: (100 - 50)}, (value, key) => key + 50);
  date = new Date().getFullYear();
  ages = Array.from({length: 18}, (value, key) => key + 18);
  searchFormGroup: FormGroup;

  private selectedJobId;

  constructor(private findModelService: FindModelService,
              private clientJobService: ClientJobsService,
              private formBuilder: FormBuilder,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.searchFormGroup = this.formBuilder.group({
      job: ['', [Validators.required]]
    });
    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state)).subscribe(state => {
      if (state && state.data) {
        this.selectedJobId = state.data.createdJobId;
        this.searchFormGroup.get('job').reset(this.selectedJobId);
      }
    });
    this.clientJobService.finishedJobs$.subscribe((value) =>
      this.searchFormGroup.get('job').reset(this.selectedJobId));
  }

  processSearchRequest() {
    this.findModelService.newSearchRequested();
  }
}
