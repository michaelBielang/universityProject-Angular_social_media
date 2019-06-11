import {Component, OnInit} from '@angular/core';
import {FindModelService} from '../../../services/find-model.service';
import {ClientJobsService} from '../../../services/client/client-jobs.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private findModelService: FindModelService, private clientJobService: ClientJobsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchFormGroup = this.formBuilder.group({
      job: ['', [Validators.required]]
    });
  }

  processSearchRequest() {
    this.clientJobService.selectedJobId = this.searchFormGroup.get('job').value;
    this.findModelService.newSearchRequested();
  }
}
