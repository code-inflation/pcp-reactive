const Rx = require('rxjs/Rx');
const WebSocket = require('ws');

let Socket = new WebSocket('wss://ws.blockchain.info/inv');

Socket.on('open', function open() {
    Socket.send('{"op":"unconfirmed_sub"}');
  });

var eventStream = Rx.Observable.fromEvent(Socket, 'message');

// all trades larger than 5 BTC
eventStream.map(event => JSON.parse(event.data))
  .map(data => data.x.inputs[0].prev_out.value/100000000)
  .filter(btcVal => btcVal > 5)
  .subscribe(btcVal => console.log(btcVal + " BTC"))
