/*
4. Streams & Lambdas
Implementieren Sie eine Methode public String processNames(String[] names), welche für einen Array von Strings alle Strings mit einer Länge 
zwischen 3 und 4 (je inklusiv) in Grossbuchstaben umwandelt und, mit einem Abstand dazwischen, zusammen hängt.
Für den Array {"Susanna", "Joe", "Lu", "Timmy", "Rafael", "Lisa"} soll die Rückgabe also wie folgt aussehen: "JOE LISA".
Hinweise: Verwenden Sie dazu einen String-Stream sowie passende Aggregate-Operationen.
Verwenden Sie an passender Stelle eine Methoden-Referenz auf eine String-Methode.
*/

var Rx = require('rxjs/Rx');

data = Rx.Observable.of("Susanna", "Joe", "Lu", "Timmy", "Rafael", "Lisa");

data.filter(x => x.length >= 3 && x.length <= 4)
    .map(x => x.toUpperCase())
    .reduce((x, y) => x + " " + y)
    .subscribe(x => console.log(x))
