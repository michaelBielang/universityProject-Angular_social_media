import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Message {
  content: string;
  senderId: string;
  timestamp: number;
  id: string;
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
      id: `#{this.messages.length + 1}`
    };
    this.messages = [message, ...this.messages];
    this.randomMessageReply();
  }

  private randomMessageReply(): void {
    if (this.messages.length % Math.round(Math.random() * 2) === 0) {
      const randomMessage = {
        content: this.createRandomMessage(this.messages[0].content),
        senderId: '4321',
        timestamp: Date.now(),
        id: `#{this.messages.length + 1}`
      };
      this.messages = [randomMessage, ...this.messages];
    }
  }

  private createRandomMessage(messageToAnwer: string): string {
    if (messageToAnwer.indexOf('?') !== -1) {
      const questionAnswers = ['42', 'Sehr gute Frage. Was sagst du denn dazu?'];
      return questionAnswers[Math.round(Math.random() * (questionAnswers.length - 1))];
    } else {
      const answers = ['ich verstehe', 'voll und ganz', 'das finde ich sehr interessant', 'erzähl mir mehr'];
      return answers[Math.round(Math.random() * (answers.length - 1))];
    }
  }

  public deleteMessage(id: string) {
    this.messages = this.messages.filter(message => message.id !== id);
  }

}
