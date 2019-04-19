import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../components/model/registration-model/user-interface";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {NotifyService} from "./notify.service";
import "rxjs-compat/add/operator/switchMap";
import "rxjs-compat/add/observable/of";

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private angularFirestore: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {
    // Define the user observable
    // TODO check whether custom user is appropriated here
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          // logged in, get custom user from Firestore
          return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          // logged out, null
          return Observable.of(null)
        }
      })
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    this.user = Observable.of({
      uid: "test",
      email: "test",
      photoURL: 'https://goo.gl/Fz9nrQ'
    })
    //TODO
    /*    return this.afAuth.authService.createUserWithEmailAndPassword(email, password)
          .then(user => {
            return this.setUserDoc(user) // create initial user document
          })
          .catch(error => this.handleError(error));*/
  }

  // Update properties on the user document
  updateUser(user: User, data: any) {
    return this.angularFirestore.doc(`users/${user.uid}`).update(data)
  }

  // If error, console log and notify user
  private handleError(error) {
    console.error(error);
    this.notify.update(error.message, 'error')
  }

  // Sets user data to firestore after succesful login
  private setUserDoc(user) {
    console.log(user);
    const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      photoURL: 'https://goo.gl/Fz9nrQ'
    };
    console.log(data.uid);
    return userRef.set(data)
  }
}
