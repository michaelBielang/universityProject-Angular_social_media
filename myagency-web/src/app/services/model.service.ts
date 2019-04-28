import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../enums/user-interface';
import {Users} from '../mocks/user.mocks';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() {
  }

  getModel(id: number): Observable<User> {
    return of(Users.find(model => model.uid === id));
  }

  getModels(): Observable<User[]> {
    return of(Users);
  }
}
