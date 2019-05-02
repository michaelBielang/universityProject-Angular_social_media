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

  public clientNews(): string[] {
    const news = [
      'Lisa send you a message.',
      'Lisa joins the job!',
      'Peter send you Option2 for the 22. May',
      'Your Job has been created'
    ];
    return news.concat(news).concat(news);
  }
}
