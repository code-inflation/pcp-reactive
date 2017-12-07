/*
2. Iterable.forEach: Zahlen und Quadratzahlen ausgeben
Implementieren Sie eine Methode, welche für einen Array von Ganzzahlen diese Zahlen sowie die dazugehörigen Quadratzahlen ausgibt. Hinweis: Ihre Methode soll dazu in sinnvoller Weise die forEach-Methode vom Interface Iterable verwenden, verwandeln Sie den Array also zuerst in eine Collection. Die Signatur der zu implementierenden Methode sieht wie folgt aus:
public void printNumbersAndSquares(Integer[] numbers)
Der Aufruf dieser Methode mit dem Array {1, 2, 3, 5, 8} als Argument soll beispielsweise folgende Ausgabe produzieren:
1: 1
2: 4
3: 9 
5: 25 
8: 64
*/
const Rx = require("rxjs");

const countingObserver = Rx.Observable.create(observer => {
    let vars = [1,2,3,5,8]
    const interval = setInterval(() => {
        observer.next(vars.shift())
        if(vars.length === 0) {
            observer.complete()
            clearInterval(interval);
        }
    }, 1000)
})

countingObserver
.do(x => process.stdout.write(x.toString() + ": "))
.map(x => x*x)
.subscribe(console.log)