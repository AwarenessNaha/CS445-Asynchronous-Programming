"use strict";
/*

var baseObject: object = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);

rectangle.width = 5;
rectangle.length = 2;

rectangle.calcSize = function () {
    return this.width * this.length;
};

console.log(rectangle.calcSize()); // 10
*/
class BaseObject {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
}
let rectangle = new BaseObject(5, 2);
console.log(rectangle.calcSize()); // 10
