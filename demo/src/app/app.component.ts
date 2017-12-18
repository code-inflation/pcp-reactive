import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import * as Rx from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  transactions$: Rx.Observable<any>;
  transactionSubject$ = new Rx.Subject<any>();
  transactionEvents = [];

  sumBitcoin = 0;
  countTransactions = 0;

  ngOnInit() {

    // Create websocket
    const ws = new WebSocket('wss://ws.blockchain.info/inv');

    // Start stream
    ws.addEventListener('open', function open() {
      ws.send('{"op":"unconfirmed_sub"}');
    });

    // Receive event and map data to object
    this.transactions$ = Rx.Observable
      .fromEvent(ws, 'message')
      .map((event: MessageEvent) => JSON.parse(event.data))

    // Emit transactions to subject
    this.transactions$.subscribe(data => {
      this.transactionSubject$.next(data);
    })

    // Get data for displaying list of 10 latest transactions higher than 5 BTC
    this.transactionSubject$
      .filter(data => data.x.inputs[0].prev_out.value / 100000000 > 5)
      .subscribe(data => {
        this.transactionEvents.unshift(data);
        if (this.transactionEvents.length > 10) {
          this.transactionEvents.pop();
        }
      });

    // Sum total transaction amount
    this.transactionSubject$
      .scan((acc, data) => Math.round(acc + data.x.inputs[0].prev_out.value / 100000000), 0)
      .subscribe(sum => this.sumBitcoin = sum);

    // Sum total transaction amount
    this.transactionSubject$
      .scan((acc, data) => acc + 1, 0)
      .subscribe(count => this.countTransactions = count);
  }
}
