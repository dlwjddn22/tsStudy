"use strict";
console.log("Typescript log1");
var myName;
myName = "이정우";
//myName = 32;
console.log(myName);
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
;
console.log(Color.Blue);
function multiply(val1, val2) {
    return val1 * val2;
}
console.log("multiply = " + multiply(3, 4));
for (var i = 0; i < 9; i++) {
    console.log(i + "번째");
}
function personInfoPrint(personInfo) {
    console.log(personInfo.name);
}
var ps = {
    name: "홍길동",
    age: 20,
    height: 180
};
personInfoPrint(ps);
