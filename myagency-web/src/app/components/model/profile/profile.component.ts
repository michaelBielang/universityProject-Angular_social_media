import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModelService} from '../../../services/model.service';
import {User} from '../../../enums/user-interface';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  model: User;
  numberOfProfilePics = [1, 2, 3, 4, 5, 6];

  constructor(
    private route: ActivatedRoute,
    private modelService: ModelService,
    private location: Location,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getModel();
  }

  savedPicture() {
    this.snackBar.open('Picture saved', 'contact', {
      duration: 1500,
    });
  }

  saveModel() {
    this.snackBar.open('Model saved', 'contact', {
      duration: 1500,
    });
  }


  getModel(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.model = this.modelService.getModel(id);
  }

  goBack(): void {
    this.location.back();
  }
}
