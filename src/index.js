var Rx = require('rxjs/Rx');

test$ = Rx.Observable.of(1,2,3);

test$.subscribe(x => console.log(x))


// Map
test$.map(x => x*x).subscribe(x => console.log(x))