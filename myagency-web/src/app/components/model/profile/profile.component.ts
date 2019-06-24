import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Model} from '../../../enums/user-interface';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../../services/user.service';
import {FileManagerService} from '../../../services/file-manager.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public model: Model;
  public polaroids: string[];
  public sedCard: string[];

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location,
              private snackBar: MatSnackBar,
              private fileManagerService: FileManagerService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.user(id).subscribe((user: Model) => {
      this.model = user;
      this.sedCard = [];
      this.model.sedCard.forEach(ref => this.fileManagerService.downLoadUrl(ref).then(src => this.sedCard.push(src)));
      this.polaroids = [];
      this.model.polaroids.forEach(ref => this.fileManagerService.downLoadUrl(ref).then(src => this.polaroids.push(src)));
    });
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

  calculateAge(birthdate) {
    const timeDiff = Math.abs(Date.now() - birthdate.toMillis());
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }
}
