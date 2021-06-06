function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    emit: function (msg) {
        this.observers.forEach(function (fn) {
            fn.call(null, msg);
        });
    }
}

const subject = new Subject();
subject.subscribe(console.log);
subject.emit('Hello');




function Subject1188() {
    this.observers = [];
}

const object8899 = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    emit: function (msg) {
        this.observers.forEach(function (fn) {
            fn.call(null, msg);
        });
    }
}

Subject1188.prototype = object8899;

const subject520 = new Subject1188();
subject520.subscribe(console.log);
subject520.emit('Hello Tina!');