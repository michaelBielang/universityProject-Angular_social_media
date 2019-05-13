import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelTipService {

  constructor() {
  }

  public tipOfTheDay(): string {
    return 'The best photos are taken when you are relaxed and completely yourself.';
  }
}
