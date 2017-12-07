var Rx = require('rxjs/Rx');

//emit 'Hello'
const source = Rx.Observable.from(['Hello', 'Moin', 'Bonjour']);

//map to inner observable and flatten
const example = source.mergeMap(val => Rx.Observable.from([`${val} World!`, `${val} Erde!`]));

//output: 'Hello World!'
const subscribe = example.subscribe(val => console.log(val));
