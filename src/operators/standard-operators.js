var Rx = require('rxjs/Rx');

// map - it passes each source value through a transformation function to get corresponding output values.
console.log("### MAP ###")
var stream = Rx.Observable.from([1,2,3])
    .map(x => x * 10);
stream.subscribe(console.log)

// filter - it only emits a value from the source if it passes a criterion function.
console.log("### FILTER ###")
var stream = Rx.Observable.from([1,2,3,4,5,6])
    .filter(x => x > 3);
stream.subscribe(console.log)

// scan - Applies an accumulator function over the source Observable, and returns each intermediate result, with an optional seed value.
console.log("### SCAN ###")
var stream = Rx.Observable.from([1,2,3,4,5,6])
    .scan((acc, curr) => acc * curr);
stream.subscribe(console.log)

// mergeMap

// combineLatest - Whenever any input Observable emits a value, it computes a formula using the latest values from all the inputs, then emits the output of that formula.
console.log("### COMBINELATEST ###")
var weight = Rx.Observable.of(70, 72, 76, 79, 75);
var height = Rx.Observable.of(1.76, 1.97, 1.78);
var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
bmi.subscribe(x => console.log('BMI is ' + x));

// take - Takes the first n values from the source, then completes.
console.log("### TAKE ###")
var stream = Rx.Observable.from([1,2,3,4,5,6])
    .take(4);
stream.subscribe(console.log)
