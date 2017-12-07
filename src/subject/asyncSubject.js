// The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, 
// and only when the execution completes.
const Rx = require("rxjs")

const subject = new Rx.AsyncSubject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next("whatever");
subject.next("wont be emmited");

subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(5);
subject.complete();