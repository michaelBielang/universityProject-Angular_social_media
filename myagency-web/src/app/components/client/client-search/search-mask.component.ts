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

  eyes = ['Blue', 'Green', 'Brown'];
  hairColors = ['Blond', 'Brunette', 'Black'];
  clothesSize = ['XS', 'S', 'M', 'L'];
  heights = Array.from({length: (200 - 160)}, (value, key) => key + 160);
  bustMeasurement = Array.from({length: (100 - 50)}, (value, key) => key + 50);
  waistMeasurement = Array.from({length: (90 - 40)}, (value, key) => key + 40);
  hipMeasurement = Array.from({length: (100 - 50)}, (value, key) => key + 50);
  date = new Date().getFullYear();
  ages = Array.from({length: 18}, (value, key) => key + 18);
  searchFormGroup: FormGroup;

  constructor(private findModelService: FindModelService,
              public clientJobService: ClientJobsService,
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
        const selectedJobId = state.data.createdJobId;
        this.searchFormGroup.get('job').reset(selectedJobId);
      }
    });
  }

  get selectedJobId() {
    return this.searchFormGroup.get('job');
  }

  processSearchRequest() {
    this.findModelService.newSearchRequested();
  }
}
