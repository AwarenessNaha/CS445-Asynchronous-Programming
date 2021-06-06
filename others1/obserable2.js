const { from } = rxjs;
const { map, filter } = rxjs.operators;
console.log('Start');
from([1, 2, 3]).pipe(
    map(n => n + 3),
    filter(n => n >= 5)).subscribe(x => console.log(x),
        error => console.error(error),
        () => console.log('done')
    );
console.log('End');