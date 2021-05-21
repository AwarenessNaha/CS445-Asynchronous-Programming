"use strict";
class Course2 {
    constructor(name) { this.name = name; }
}
class MSD extends Course {
    constructor(code, name) {
        super(name);
        this.code = code;
    }
    displayName() {
        console.log(`Name = ${this.name}, Course Code = CS${this.code}`);
    }
}
let course2 = new MSD(445, "Modern Asynchronous Programming");
course.displayName(); // Name = Modern Asynchronous Programming, Course Code = CS445
