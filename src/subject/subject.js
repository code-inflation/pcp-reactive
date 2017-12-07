const Rx = require("rxjs");


// Example 1
const subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

const observable = Rx.Observable.interval(1000)

observable.subscribe(subject)


