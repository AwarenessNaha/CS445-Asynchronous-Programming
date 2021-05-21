"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Red;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
})(Color2 || (Color2 = {}));
;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 3] = "Red";
    Color3[Color3["Green"] = 4] = "Green";
    Color3[Color3["Blue"] = 5] = "Blue";
})(Color3 || (Color3 = {}));
;
let user;
user = [1, "John", true, 20, "Faculty"];
//user = [2, 2, "ad", true, "aa"];
let family;
family = [[1, "John"], [2, "Mike"], [3, "Mada"]];
console.log(family);
let course;
let data;
function process(code) { }
let emp = {
    empCode: 1001,
    empName: 'John',
    setEmpName: function (name) {
        this.empName = name;
    },
    getEmpName: function () {
        return this.empName;
    }
};
emp.setEmpName('Edward');
console.log(emp.getEmpName());
let kv1 = { key: 1, value: "John" };
let kv2 = { key: 2 };
let northStreet = {
    zipcode: 52557,
    name: "Fairfield"
};
class Course {
    constructor(code, name) {
        this.grade = 0;
        this.code = code;
        this.name = name;
    }
    setGrade(grade) {
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
let course1 = new Course(445, "Modern Asynchronous Programming");
