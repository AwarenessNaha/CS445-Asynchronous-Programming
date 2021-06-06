const { fromEvent } = rxjs;

const node = document.getElementById("search"); //create observable that emits click events
const inputObs = fromEvent(node, 'input');
inputObs.subscribe({
    next: event => console.log(`You just typed ${event.target.value}!`), error: err => console.log(`Oops... ${err}`),
    complete: () => console.log(`Complete!`),
});