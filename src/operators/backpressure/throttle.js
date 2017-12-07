// throttleTime - Lets a value pass, then ignores source values for the next duration milliseconds.
var Rx = require('rxjs/Rx');

var names = ["Susanna", "Joe", "Lu", "Timmy", "Rafael", "Lisa", "Tim", "Tom", "Test"];

var source = Rx.Observable.create(function (observer) {
    var interval = setInterval(() => {
        observer.next(names.shift());
        if (names.length <= 0) {
            observer.complete();
            clearInterval(interval);
        }
    }, 10);
});

source.throttleTime(15).subscribe(console.log);
