import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../enums/user-interface';
import {Users} from '../mocks/model.mocks';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private readonly _models = new BehaviorSubject<User[]>([]);

  public get models(): User[] {
    return this._models.getValue();
  }

  public set models(val: User[]) {
    this._models.next(val);
  }

  public readonly models$ = this._models.asObservable();

  constructor() {
    this.models = [...Users];
  }

  getModel(id: string): User {
    return this.models.find(model => model.uid === id);
  }

}
