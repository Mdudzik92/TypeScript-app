"use strict";
// Basic Types
let id = 5;
let company = 'Totally dude';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Matt', true];
// Tuple Array
let employee;
employee = [
    [1, 'Matt'],
    [2, 'Bob'],
    [3, 'Jiminy'],
];
// Union
let pid = 22;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Sky";
    Direction2["Down"] = "Ground";
    Direction2["Left"] = "West";
    Direction2["Right"] = "East";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Left);
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John'
};
