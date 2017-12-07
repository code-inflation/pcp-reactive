// buffer - Collects values from the past as an array, and emits that array only when another Observable emits.
var Rx = require('rxjs/Rx');
var bnames = ["Susanna", "Joe", "Lu", "Timmy", "Rafael", "Lisa", "Tim", "Tom", "Test"];

var bstream = Rx.Observable.create(function (observer) {
    var interval = setInterval(() => {
        observer.next(bnames.shift());
        if (bnames.length <= 0) {
            observer.complete();
            clearInterval(interval);
        }
    }, 10);
});

bstream.bufferTime(25).subscribe(console.log);
