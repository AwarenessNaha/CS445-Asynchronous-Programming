class Student {
    constructor(name) {
        this.name = name;
    }
}

class SuperStudent {
    constructor(student, beingAware, state) {
        this.student = student;
        this.name = student.name;
        this.being = beingAware;
        this.state = state;
    }

    logger() {
        console.log("I am being aware of the existence of Self!");
    }
}

const naha = new Student("Naha");

const decorated = new SuperStudent(naha, "BeingAware", "Happy");
decorated.logger();
console.log(decorated);

