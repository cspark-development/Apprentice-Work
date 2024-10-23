/*
The following class has partially been created for you:

| Car |
| --- |
| String model |
| String Color |
| --- |
| static compareColor(first, second) : Boolean |
| drive() : String |

`Properties`
- `model` and `color` are provided to the constructor.
- If `color` is empty, it will default to black.
`Methods`
- `drive()` returns a string `"Vroom!"`

1. Add the static method from the diagram:
- `compareColor(first, second)`: It should return a boolean value depending on whether the color property of two instances of Car match.
2. Run your code.
3. Test your code.
*/

class Car {
	constructor(model, color = "black") {
		this.model = model;
		this.color = color;
	}

	drive() {
		return "Vroom!";
	}

	// Write your code here
	static compareColor(first, second) {
		return (first === second);
	}
};
// DO NOTE EDIT CODE
module.exports = Car;
