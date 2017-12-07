// A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.
const Rx = require("rxjs")

var subject = new Rx.ReplaySubject(5); // buffer 3 values for new subscribers

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);
subject.next(6);
subject.next(7);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(5);