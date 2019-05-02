import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../enums/user-interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {NotifyService} from './notify.service';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/observable/of';
import {UserRole} from '../enums/user-role.enum';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private angularFirestore: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          // logged in, get custom user from Firestore
          return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // logged out -> null
          return Observable.of(null);
        }
      });
  }

  /**
   * sign up with e-mail and password
   * @param email
   * @param password
   * @param role
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
   * @param userName
   * @param password
   */
  public loginEmail(userName: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(userName, password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  // Update properties on the user document
  updateUser(user: User, data: any) {
    return this.angularFirestore.doc(`users/${user.uid}`).update(data);
  }

  // If error, console log and notify user
  private handleError(error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  // Sets user data to firestore after succesful login
  private setUserDoc(user: UserCredential, role: UserRole): Promise<void> {
    const uid = user.user.uid;
    const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(`users/${uid}`);

    const data: User = {
      uid,
      email: user.user.email || null,
      role
    };
    return userRef.set(data);
  }
}
