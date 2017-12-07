/*
The main difference between switchMap and other flattening operators is the cancelling effect.
On each emission the previous inner observable (the result of the function you supplied) is cancelled and the new observable is subscribed.
You can remember this by the phrase switch to a new observable.
*/

var Rx = require('rxjs/Rx');

//emit immediately, then every 5s
const source = Rx.Observable.timer(0, 5000);

//switch to new inner observable when source emits, emit items that are emitted
const example = source.switchMap(() => Rx.Observable.interval(500));

//output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
const subscribe = example.subscribe(val => console.log(val));
