"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
    Direction[Direction["Right"] = 8] = "Right";
})(Direction || (Direction = {}));
;
let upMovement = Direction.Up;
let downMovement = Direction.Down;
let leftMovement = Direction.Left;
let rightMovement = Direction.Right;
console.log(upMovement, downMovement, leftMovement, rightMovement);
console.log(Direction[1], Direction[2], Direction[4], Direction[8]);
var Color;
(function (Color) {
    Color["red"] = "#ff0000";
    Color["green"] = "#00ff00";
    Color["blue"] = "#0000ff";
})(Color || (Color = {}));
let firstColor = Color.red;
let secondColor = Color.green;
let thirdColor = Color.blue;
console.log(firstColor, secondColor, thirdColor);
