import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserNewsService {

  constructor() {
  }

  public modelNews(): string[] {
    const news = [
      'You are booked for armani!',
      'We\'re sorry to tell you it didn\'t work out with Calvin Klein. <3 Keep Going!',
      'You have a request for armani :)'
    ];
    return news.concat(news).concat(news);
  }
}
