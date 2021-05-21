"use strict";
class MAP {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
    display() {
        console.log(`${this.name}, Course Code = CS${this.code}`);
    }
}
let wad = new MAP(445, "Modern Asynchronous Programming");
wad.display(); // Modern Asynchronous Programming, Course Code = CS445
