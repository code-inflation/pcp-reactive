// windows - It's like buffer, but emits a nested Observable instead of an array.
var Rx = require('rxjs/Rx');
console.log("### WINDOW ###")
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

dsource.windowCount(3).subscribe(
    function (x){
        console.log("new window batch")
        x.subscribe(console.log)
    }
);
