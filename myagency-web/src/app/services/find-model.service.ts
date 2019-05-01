import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FindModelService {

  subject: Subject<any> = new Subject();

  constructor() {
  }

  newSearchRequested(callSource) {
    this.subject.next(callSource);
  }

}
