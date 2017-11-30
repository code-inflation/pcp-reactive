# pcp-reactive
School proj about reactive programming in JS/ TS

## Reactive (Java- / TypeScript)
- Basics idea: asynchronous data streams
- Observers
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
