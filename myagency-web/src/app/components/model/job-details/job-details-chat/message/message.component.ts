import {Component, Input} from '@angular/core';
import {Message} from '../chat.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input()
  public message: Message;

  @Input()
  public userId: string;

  constructor() {
  }

  public time(): string {
    const date = new Date(this.message.timestamp);
    const hour = date.getHours();
    const minute = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
    return hour + ':' + minute;
  }

}
