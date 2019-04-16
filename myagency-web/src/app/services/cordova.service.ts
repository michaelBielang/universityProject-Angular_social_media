import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject, fromEvent} from 'rxjs';

function _window(): any {
  // return the global native browser window object
  return window;
}

/**
 * Service for cordova specific actions
 */
@Injectable({
  providedIn: 'root'
})
export class CordovaService {

  private resume: BehaviorSubject<boolean>;

  constructor(private zone: NgZone) {
    this.resume = new BehaviorSubject<boolean>(null);
    fromEvent(document, 'resume').subscribe(event => {
      this.zone.run(() => {
        this.onResume();
      });
    });
  }

  /**
   * returns cordova object
   */
  public get cordova(): any {
    return _window().cordova;
  }


  /**
   * determines if the app runs in cordova
   */
  public get isCordova(): boolean {
    return !!_window().cordova;
  }

  /**
   *
   */
  public onResume(): void {
    this.resume.next(true);
  }
}
