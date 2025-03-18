enum Direction {
    Up = 1,
    Down = 2,
    Left = 4,
    Right = 8
};

let upMovement: Direction = Direction.Up;
let downMovement: Direction = Direction.Down;
let leftMovement: Direction = Direction.Left;
let rightMovement: Direction = Direction.Right;

console.log(upMovement, downMovement, leftMovement, rightMovement);
console.log(Direction[1], Direction[2], Direction[4], Direction[8]);


enum Color {
    red = "#ff0000",
    green = "#00ff00",
    blue = "#0000ff"
}

let firstColor: Color = Color.red;
let secondColor: Color = Color.green;
let thirdColor: Color = Color.blue;

console.log(firstColor, secondColor, thirdColor);