import {AfterViewInit, Component, Input, ViewChildren} from '@angular/core';
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

  @ViewChildren('item')
  private allItems;

  constructor() {
  }

  ngAfterViewInit() {
    this.resizeAllGridItems();
  }

  private resizeGridItem(item): void {
    debugger;
    const grid = document.getElementsByClassName('masonry-container')[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10);
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);
    const rowSpan = Math.ceil((item.nativeElement.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  private resizeAllGridItems(): void {
    this.allItems.forEach((value) => this.resizeGridItem(value));
  }


  public resizeInstance(instance): void {
    debugger;
    const item = instance.elements[0];
  }

}
