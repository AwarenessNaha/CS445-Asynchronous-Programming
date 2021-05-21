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
    width: number;
    length: number;
    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }
    calcSize(): number {
        return this.width * this.length;
    }
}
let rectangle: BaseObject = new BaseObject(5, 2);


console.log(rectangle.calcSize()); // 10
