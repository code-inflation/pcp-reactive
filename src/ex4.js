/*
4. Streams & Lambdas
Implementieren Sie eine Methode public String processNames(String[] names), welche für einen Array von Strings alle Strings mit einer Länge 
zwischen 3 und 4 (je inklusiv) in Grossbuchstaben umwandelt und, mit einem Abstand dazwischen, zusammen hängt.
Für den Array {"Susanna", "Joe", "Lu", "Timmy", "Rafael", "Lisa"} soll die Rückgabe also wie folgt aussehen: "JOE LISA ".
Hinweise: Verwenden Sie dazu einen String-Stream sowie passende Aggregate-Operationen.
Verwenden Sie an passender Stelle eine Methoden-Referenz auf eine String-Methode.
*/

var Rx = require('rxjs/Rx');

var names = ["Susanna", "Joe", "Lu", "Timmy", "Rafael", "Lisa", "Tim", "Tom", "Test"];

var source = Rx.Observable.create(function (observer) {
    var interval = setInterval(() => {
        observer.next(names.pop());
        if (names.length <= 0) {
            observer.complete();
            clearInterval(interval);
        }
    }, 1000);
});

source.filter(x => x.length >= 3 && x.length <= 4)
    .map(x => x.toUpperCase() + " ")
    .subscribe(x => process.stdout.write(x));
