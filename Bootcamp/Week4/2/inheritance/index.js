/*
A parent Shape class has been declared with a color property and draw() method.
1. Declare a Circle class that extends the Shape class.
2. Create code that gives the Circle class have the following properties and methods:
- Properties
    - color inherited from the Shape class.
    - radius set by the Circle class.
- Methods
    - draw() inherited from the Shape class.
    - calculateArea() that returns the area of the circle. The area of a  
    - circle is calculated by the formula Area = πr^2. You can use 3.14 or Math.PI for the value of pi.
3. Run your code.
4. Test your code.
*/

// Parent class
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    return `Drawing a ${this.color} shape.`;
  }
}
// Write your code here
class Circle extends Shape {
	constructor(color, radius) {
		super(color);	
		this.radius = radius;
	}
	calculateArea() {
		return Math.PI * (this.radius ** 2);
	}
}

// DO NOT EDIT CODE BELOW
module.exports = {
  Shape,
  Circle,
};
