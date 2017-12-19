# Programming Concepts and Paradigms
This repository holds our school project about reactive programming with reactiveX. We choose JavaScript/TypeScript to demonstrate how observables, observers and operators work.

## [Reactive programming background](http://reactivex.io/rxjs/manual/overview.html#introduction)
- Basics idea: asynchronous data streams

    ![Stream Example](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754/raw/35cc1edb69b7175fd1308800a244410890bc9b5f/zmulticlickstream.png)
## [Observable](http://reactivex.io/rxjs/manual/overview.html#observable)
    
## [Observers](http://reactivex.io/rxjs/manual/overview.html#observer)
![Observer Pattern](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Observer.svg/854px-Observer.svg.png)
- Hot vs. cold observables
    - COLD is when your observable creates the producer
    ```javascript
        // COLD
        var cold = new Observable((observer) => {
        var producer = new Producer();
        // have observer listen to producer here
        });
    ```
    - HOT is when your observable closes over the producer
    ```javascript
        // HOT
        var producer = new Producer();
        var hot = new Observable((observer) => {
        // have observer listen to producer here
        });
    ```
## [Subjects](http://reactivex.io/rxjs/manual/overview.html#subject)
- Async Subject
- Behavior Subject
- Replay Subject

## [Operators](http://reactivex.io/rxjs/manual/overview.html#operators)
[RxMarbels](http://rxmarbles.com/)
### Standard Operators
- Map
- Filter
- Scan
- SwitchMap
- MergeMap
- combineLatest
- take

### Backpressure Operators
- Throtteling
- Buffering
- Debounce
- Windows

## [Languages](http://reactivex.io/languages.html)
- RxJS
- RxJava

## Notes
- http://reactivex.io/rxjs/manual/tutorial.html#external-references
- http://reactivex.io/
- https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
- https://rxviz.com/examples/grouped-fibonacci

## Run the examples
To run the examples make sure you have node.js(tested Version 8.9.3LTS) installed on your system.
Run npm install to install the dependencies and run the examples in the console with "node ./src/<filename>.js