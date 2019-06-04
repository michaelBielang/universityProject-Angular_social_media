import {Injectable} from '@angular/core';
import {UserRole} from '../enums/user-role.enum';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from '../enums/user-interface';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  /**
   * navigates to main according to model role
   */
  public goToMain(): void {
    this.authService.user.subscribe((user: User) => {
      if (!!user) {
        switch (user.role) {
          case UserRole[UserRole.MODEL]:
            this.router.navigate(['model']);
            break;
          case UserRole[UserRole.CLIENT]:
            this.router.navigate(['client']);
            break;
          default:
            this.router.navigate(['landing-page']);
        }
      } else {
        this.router.navigate(['landing-page']);
      }
    });
  }
}
