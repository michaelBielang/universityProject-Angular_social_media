import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../enums/user-interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {NotifyService} from './notify.service';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/observable/of';
import {UserRole} from '../enums/user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = new BehaviorSubject(null);

  constructor(private afAuth: AngularFireAuth,
              private angularFirestore: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {
    this.afAuth.authState
      .switchMap(user => {
        if (user) {
          // logged in, get custom model from Firestore
          return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges();
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
  public emailSignUp(email: string, password: string, role: UserRole): Promise<void> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        return this.setUserDoc(user, role);
      })
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

  // Update properties on the model document
  updateUser(user: User, data: any) {
    return this.angularFirestore.doc(`users/${user.uid}`).update(data);
  }

  // If error, console log and notify model
  private handleError(error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  /**
   * Sets model data to firestore after succesful login
   * @param user to create doc for
   * @param role of the user
   */
  private setUserDoc(user, role: UserRole): Promise<void> {
    const uid = user.user.uid;
    const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(`users/${uid}`);

    const data: User = {
      uid,
      email: user.user.email || null,
      role: UserRole[role],
      name: 'dummy',
      location: 'dummy',
      height: 'dummy',
      size: 'dummy',
    };
    return userRef.set(data);
  }
}
