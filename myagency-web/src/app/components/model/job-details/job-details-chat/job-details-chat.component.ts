import {Component} from '@angular/core';
import {NavigatedFromRouteService} from '../navigated-from-route.service';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-job-details-chat',
  templateUrl: './job-details-chat.component.html',
  styleUrls: ['./job-details-chat.component.scss']
})
export class JobDetailsChatComponent {

  public value = '';

  private userId = '123';

  constructor(private navigatedFromRouteService: NavigatedFromRouteService,
              private chatService: ChatService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
  }

  public sendMessage(): void {
    if (!!this.value) {
      this.chatService.sendMessage(this.value, this.userId);
      this.value = '';
    }
  }
}
