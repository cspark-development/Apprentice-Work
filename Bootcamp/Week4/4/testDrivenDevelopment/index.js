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
// Write your Square class here. Do this second!
class Square {
	constructor(width, height, x, y, color) {
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.color = color;
	}
	calculateArea() {
		return this.width * this.height;
	}
}

// DO NOT EDIT BELOW THIS LINE
module.exports = Square;
