import {Component} from '@angular/core';
import {NavigatedFromRouteService} from '../../../../services/navigated-from-route.service';
import {ChatService} from './chat.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public value = '';

  private userId = '123';

  constructor(private navigatedFromRouteService: NavigatedFromRouteService,
              public chatService: ChatService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
  }

  public sendMessage(): void {
    if (!!this.value) {
      this.chatService.sendMessage(this.value, this.userId);
      this.value = '';
    }
  }
}
