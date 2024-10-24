/*
GOAL: Create a class called Square that conforms to the class diagram below. Use Test Driven Development by writing your tests in index.test.js FIRST and your code in index.js second.

| Square |
| --- |
| number width |
| number height |
| number x |
| number y |
| String color |
| --- |
| calculateArea() : number |

To Run Tests:
1. In the console, type npm install
2. In the console, type npm run test. These will automatically run every time you update your code!
*/
const Square = require("./index.js");

const testSquare = new Square(5, 7, 3, 6, "blue");
test("Ensure width is set correctly", () => {
	expect(testSquare.width).toEqual(5);
});

test("Ensure height is set correctly", () => {
	expect(testSquare.height).toEqual(7);
});

test("Ensure x is set correctly", () => {
	expect(testSquare.x).toEqual(3);
});

test("Ensure y is set correctly", () => {
	expect(testSquare.y).toEqual(6);
});

test("Ensure color is set correctly", () => {
	expect(testSquare.color).toEqual("blue");
});

test("Ensure calculateArea() returns correct value", () => {
	expect(testSquare.calculateArea()).toEqual(35);
});
