# pcp-reactive
School proj about reactive programming in JS/ TS

## Reactive (Java- / TypeScript)
- Basics idea: asynchronous data streams
![Stream Example](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754/raw/35cc1edb69b7175fd1308800a244410890bc9b5f/zmulticlickstream.png)
- Observers
![Observer Pattern](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Observer.svg/854px-Observer.svg.png)
- Hot vs. cold observables
    - COLD is when your observable creates the producer
    ```js
        // COLD
        var cold = new Observable((observer) => {
        var producer = new Producer();
        // have observer listen to producer here
        });
    ```
    - HOT is when your observable closes over the producer
    ```js
        // HOT
        var producer = new Producer();
        var hot = new Observable((observer) => {
        // have observer listen to producer here
        });
    ```
- Subjects
	- Behavior Subject
	- Replay Subject
- Operators
	- Map
	- SwitchMap
	- MergeMap
	- Filter
	- Scan
- Frameworks:
	- RxJS
	- RxJava

## Notes
- https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
