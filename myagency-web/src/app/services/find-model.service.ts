import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FindModelService {

  showResults = false;
  showProgress = false;

  constructor() {
  }

  async newSearchRequested() {
    this.showProgress = true;
    await new Promise(resolve => setTimeout(resolve, 750));
    this.showProgress = false;
    this.showResults = true;
  }

}
