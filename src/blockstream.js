const Rx = require('rxjs/Rx');
const WebSocket = require('ws');

let Socket = new WebSocket('wss://ws.blockchain.info/inv');

Socket.on('open', function open() {
    Socket.send('{"op":"unconfirmed_sub"}');
  });

var eventStream = Rx.Observable.fromEvent(Socket, 'message');
  
eventStream.debounceTime(250).subscribe(console.log)
