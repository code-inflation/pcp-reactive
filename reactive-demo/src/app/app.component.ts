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
  transactionEvents = [];

  ngOnInit() {

    const ws = new WebSocket('wss://ws.blockchain.info/inv');

    ws.addEventListener('open', function open() {
      ws.send('{"op":"unconfirmed_sub"}');
    });

    this.transactions$ = Rx.Observable.fromEvent(ws, 'message');

    this.transactions$
      .map((event: MessageEvent) => event.data)
      .debounceTime(500)
      .do(console.log)
      .subscribe(inputData => {
        const data = JSON.parse(inputData);
        this.transactionEvents.unshift(data);
        if (this.transactionEvents.length > 10) {
          this.transactionEvents.pop();
        }
      });
  }
}
