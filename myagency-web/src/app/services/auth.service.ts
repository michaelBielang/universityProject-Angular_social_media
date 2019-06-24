import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../enums/user-interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {NotifyService} from './notify.service';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/observable/of';
import {UserRole} from '../enums/user-role.enum';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = new BehaviorSubject<User>(null);

  constructor(private afAuth: AngularFireAuth,
              private notify: NotifyService,
              private userService: UserService) {
    this.afAuth.authState
      .switchMap(user => {
        if (user) {
          // logged in, get custom model from Firestore
          return this.userService.user(user.uid);
        } else {
          // logged out -> null
          return Observable.of(null);
        }
      }).subscribe((user) => this.user.next(user));
  }

  /**
   * sign up with e-mail and password
   * @param email of the user
   * @param password of the user
   * @param role of the user
   */
  public emailSignUp(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch(error => this.handleError(error));
  }

  /**
   * login for the user
   * @param userName to login with
   * @param password to login with
   */
  public loginEmail(userName: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(userName, password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  // If error, console log and notify model
  private handleError(error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }

  /**
   * Sets model data to firestore after successful login
   * @param user to create doc for
   * @param role of the user
   */
  public setUserDoc(user, role: UserRole): Promise<void> {
    const uid = user.user.uid;
    const data: User = {
      uid,
      email: user.user.email || null,
      role
    };
    return this.userService.setUserData(uid, data);
  }
}
