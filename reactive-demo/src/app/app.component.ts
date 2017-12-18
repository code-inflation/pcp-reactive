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

    // ws.addEventListener('message', (event) => {
    //  this.transactions$.next(event);
    // });

    this.transactions$ = Rx.Observable.fromEvent(ws, 'message');
    this.transactions$
      .map((event: MessageEvent) => event.data)
      .subscribe(inputData => {
        const data = JSON.parse(inputData);
        console.log(data);
        this.transactionEvents.unshift(data);
        if (this.transactionEvents.length > 10) {
          this.transactionEvents.pop();
        }
      });
  }
}
// {
// "op" : "utx",
// "x" : {
//   "lock_time" : 0,
//   "ver" : 1,
//   "size" : 225,
//   "inputs" : [ {
//     "sequence" : 4294967295,
//     "prev_out" : {
//       "spent" : true,
//       "tx_index" : 313501106,
//       "type" : 0,
//       "addr" : "1BEK5q6mKBKseE8VE5aJfciGMSiPrcgeDp",
//       "value" : 4681025,
//       "n" : 1,
//       "script" : "76a9147035c2af6feeccb904a8ebc69a9b75e1c02b028b88ac"
//     },
//     "script" : "4730440220587bab497b14fc1253967fa4ef761e4c154929ec2c8f9177c219b07bedc7461e022072fd7aeb4577081828d092d0fc443434fa174ec9df6ae34134c523a20a39bc01012103f9ff57ae2ae573c897e8d3f301ce3444380851937bb9e87446301d27f59583c3"
//   } ],
//   "time" : 1513584752,
//   "tx_index" : 313963575,
//   "vin_sz" : 1,
//   "hash" : "8275c27d667358d95af6501dd24aa1d5bfdf5eb6cc417927295dadc3cfc1f3af",
//   "vout_sz" : 2,
//   "relayed_by" : "127.0.0.1",
//   "out" : [ {
//     "spent" : false,
//     "tx_index" : 313963575,
//     "type" : 0,
//     "addr" : "197iH8vhZB6AHGo3vBAs1otrnZcLhxeU8B",
//     "value" : 1073600,
//     "n" : 0,
//     "script" : "76a9145905f598c2fb00b8a162da8e9f81302179d6ce0388ac"
//   }, {
//     "spent" : false,
//     "tx_index" : 313963575,
//     "type" : 0,
//     "addr" : "18eSMUHmBEXDFrtFPZ3Qn7Jk8r3QbZKZn4",
//     "value" : 3574429,
//     "n" : 1,
//     "script" : "76a91453dd6f449fe98bf71beb44d5d77edec805f8f68a88ac"
//   } ]
// }
// }
