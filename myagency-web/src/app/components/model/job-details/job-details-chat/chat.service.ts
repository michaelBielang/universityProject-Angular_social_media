import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Message {
  content: string;
  senderId: string;
  timestamp: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private readonly _messages = new BehaviorSubject<Message[]>([]);

  public get messages(): Message[] {
    return this._messages.getValue();
  }

  public set messages(val: Message[]) {
    this._messages.next(val);
  }

  public readonly messages$ = this._messages.asObservable();

  constructor() {
  }


  public sendMessage(content: string, senderId: string): void {
    const message = {
      content,
      senderId,
      timestamp: Date.now(),
      id: this.messages.length + 1
    };
    this.messages = [message, ...this.messages];
    this.randomMessageReply();
  }

  public randomMessageReply(): void {
    if (this.messages.length % (Math.random() * 10) === 0) {
      const randomMessage = {
        content: 'hihiohiohih',
        senderId: '4321',
        timestamp: Date.now(),
        id: this.messages.length + 1
      };
      this.messages = [randomMessage, ...this.messages];
    }
  }

  public deleteMessage(id: number) {
    this.messages = this.messages.filter(todo => todo.id !== id);
  }

}
