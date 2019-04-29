import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModelService} from '../../../services/model.service';
import {User} from '../../../enums/user-interface';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  model: User;

  constructor(
    private route: ActivatedRoute,
    private modelService: ModelService,
    private location: Location) {

  }

  ngOnInit() {
    this.getModel();
  }

  getModel(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.modelService.getModel(id)
      .subscribe(model => this.model = model);
  }

  goBack(): void {
    this.location.back();
  }
}
