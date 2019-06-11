import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../enums/user-interface';
import {UserRole} from '../enums/user-role.enum';
import {Collections} from '../enums/collections.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: AngularFirestore) {

  }

  public user(uid: string): Observable<User> {
    return this.fireStore.collection(Collections.USERS).doc<User>(uid).valueChanges();
  }

  public users(uids: string[]): Observable<User[]> {
    return combineLatest(uids.map(uid => this.user(uid)));
  }

  public models(): Observable<User[]> {
    return this.fireStore.collection<User>(Collections.USERS, ref => ref.where('role', '==', UserRole.MODEL)).valueChanges();
  }

  /**
   * sets user data or if it already exists the doc is updated with the new values
   * @param uid user id
   * @param data new data
   */
  public setUserData(uid: string, data: User): Promise<void> {
    return this.fireStore.collection(Collections.USERS).doc(uid).set(data, {merge: true});
  }
}
