// debounce - Emits a value from the source Observable only after a particular time span has passed without another source emission.
var Rx = require('rxjs/Rx');
console.log("### DEBOUNCE ###")
var dnames = ["Susanna", "Joe", "Lu", "Timmy", "Rafael", "Lisa", "Tim", "Tom", "Test"];

var dsource = Rx.Observable.create(function (observer) {
    var interval = setInterval(() => {
        observer.next(dnames.pop());
        if (dnames.length <= 0) {
            observer.complete();
            clearInterval(interval);
        }
    }, 10);
});

/*
    Only emit values after a second has passed between the last emission, 
    throw away all other values
*/
dsource.debounceTime(1000).subscribe(console.log);
