"use strict";
/**
 * function Car(name) {
    this.name = name;
    this.acceleration = 0;
    this.honk = function() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    };
    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
 */
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
        //this.acceleration = acce;
    }
    honk() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    ;
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
