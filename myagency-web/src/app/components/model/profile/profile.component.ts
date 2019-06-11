import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../enums/user-interface';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  model: User;
  numberOfProfilePics = [1, 2, 3, 4, 5, 6];

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location,
              private snackBar: MatSnackBar) {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.user(id).subscribe(user => this.model = user);
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

  goBack(): void {
    this.location.back();
  }
}
