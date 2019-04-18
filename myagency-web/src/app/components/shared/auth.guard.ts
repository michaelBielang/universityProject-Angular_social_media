import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {NotifyService} from "../../services/notify.service";
import {Observable} from "rxjs";
import "rxjs-compat/add/operator/take";
import "rxjs-compat/add/operator/do";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private notify: NotifyService) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    return this.authService.user
      .take(1)
      .map(user => !!(user && user.catchPhrase))
      .do(loggedIn => {
        if (!loggedIn) {
          this.notify.update('You must be logged in and have a catch phrase!', 'error');
          this.router.navigate(['/login']);
        }
      })
  }
}
