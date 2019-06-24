import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {Model} from '../enums/user-interface';


@Injectable({
  providedIn: 'root'
})
export class FindModelService {

  showResults = false;
  showProgress = false;

  constructor(private userService: UserService) {
  }

  public modelSearch(): Observable<Model[]> {
    return this.userService.models();
  }

  async newSearchRequested() {
    this.showProgress = true;
    await new Promise(resolve => setTimeout(resolve, 750));
    this.showProgress = false;
    this.showResults = true;
  }

}
