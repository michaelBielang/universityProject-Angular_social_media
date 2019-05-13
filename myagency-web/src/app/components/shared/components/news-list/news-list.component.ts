import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  /**
   * news list wich should be displayed
   */
  @Input()
  public news: string[];

  /**
   * number of items initially displayed and appended per 'more' click
   */
  @Input()
  public displayedItems = 3;

  public currentlyDisplayedItems = this.displayedItems;

  constructor() {
  }

  ngOnInit() {
  }

}
