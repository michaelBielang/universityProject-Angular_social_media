import {AfterViewInit, Component, Input, QueryList, ViewChildren} from '@angular/core';
import {RelatedNews} from '../../../../services/model/related-news.service';

@Component({
  selector: 'related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.scss']
})
export class RelatedNewsComponent implements AfterViewInit {

  /**
   * related news which should be displayed
   */
  @Input()
  public content: RelatedNews[];

  /**
   * number of items initially displayed and appended per 'more' click
   */
  @Input()
  public displayedItems = 3;

  public currentlyDisplayedItems = this.displayedItems;

  @ViewChildren('card')
  private allItems: QueryList<any>;

  private rowHeight;
  private rowGap;

  constructor() {
  }

  ngAfterViewInit() {
    const grid = document.getElementsByClassName('masonry-container')[0];
    this.rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10);
    this.rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);
    this.resizeAllGridItems();
    this.allItems.changes.subscribe((value) => this.resizeAllGridItems());
    window.addEventListener('resize', this.resizeAllGridItems);
  }

  private resizeGridItem(item): void {
    const rowSpan = Math.ceil((item.nativeElement.querySelector('.card-content').getBoundingClientRect().height + this.rowGap) /
      (this.rowHeight + this.rowGap));
    item.nativeElement.style.gridRowEnd = 'span ' + rowSpan;
  }

  private resizeAllGridItems(): void {
    this.allItems.forEach((value) => this.resizeGridItem(value));
  }
}
