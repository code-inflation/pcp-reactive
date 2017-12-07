/*
Fibonacci
*/
const Rx = require("rxjs")

const fibonacci = Rx.Observable
    .interval(500)
    .scan(({ secondLast, last }) => ({
        secondLast: last,
        last: last + secondLast,
    }), { secondLast: 0, last: 1 })
    .pluck('secondLast')


fibonacci
    .take(10)
    .subscribe(console.log)