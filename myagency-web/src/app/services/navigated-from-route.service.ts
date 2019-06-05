import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigatedFromRouteService {

  private previousUrl: string;
  private currentUrl: string;
  private updateNext = true;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        if (this.updateNext) {
          this.currentUrl = event.url;
        } else {
          this.updateNext = true;
        }
      }
    });
  }

  /**
   * {returns} last navigated url
   */
  public getPreviousUrl(): string {
    return this.previousUrl;
  }

  /**
   * resets the url so tha child navigations are not counted as previous urls
   */
  public resetCurrentUrlToPrevious(): void {
    this.updateNext = false;
  }
}
