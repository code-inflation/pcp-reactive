// BehaviorSubjects are useful for representing "values over time". 
// For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.
const Rx = require("rxjs")

const subject = new Rx.BehaviorSubject("Initial Value"); // 0 is the initial value

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(3);