import {Component, OnInit} from '@angular/core';
import {NavigatorService} from '../../../../services/navigator.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public navigatorService: NavigatorService) {
  }

  ngOnInit() {
  }

}
