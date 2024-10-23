/*
1. Create the following class using JavaScript's class syntax:

| Triangle |
| --- |
| number base |
| number height |
| number corners |
| --- |
| taller(dh: number) : void |
| area() : number |

2. Properties
- The `base` and `height` are provided to the `constructor` function.
- `corners` is always set to 3 .
3. Methods
- `taller(dh)` adds the `dh` to the `height`
- `area()` calculates and returns the area of the triangle
4. Run your code.
5. Test your code.
*/
// Write your code here
class Triangle {
	constructor(base, height) {
		this.base = base;
		this.height = height;
		this.corners = 3;
	}
	taller(dh) {
		this.height += dh;
	}
	area() {
		return 0.5 * this.base * this.height;
	}
}

// DO NOT EDIT CODE BELOW
module.exports = Triangle;
