import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';

export interface Winner {
  mail: string;
}

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnInit {
  private readonly _participants = new BehaviorSubject<Winner[]>([]);


  public get participants(): Winner[] {
    return this._participants.getValue();
  }

  public set participants(val: Winner[]) {
    this._participants.next(val);
  }

  public readonly participants$ = this._participants.asObservable();

  public winner = '...';

  constructor(private fireStore: AngularFirestore) {
  }

  ngOnInit() {
    this.fireStore.collection<Winner>('gewinnspiel').valueChanges().subscribe((participants: Winner[]) => this.participants = participants);
  }

  public drawWinner(): void {
    this.winner = this.participants[Math.floor(Math.random() * this.participants.length)].mail;
  }

}
