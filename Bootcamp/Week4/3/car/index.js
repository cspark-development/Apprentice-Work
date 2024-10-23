/*
1. Create a class named `Car`. In this class you will initialize 2 private fields:
    - `#brand`
    - `#color`
2. Your constructor method should take 2 arguments, one for `brand` and one for `color`, and set them on the private fields you defined.
3. Create 2 setter methods:
    - `setColor` for setting the value of the `#color` property, and `setBrand` for setting the value of the `#brand` property.
    - In each setter method, throw an error if no parameter is passed in as an argument
        - **Brand**: `You must include a Brand`
        - **Color**: `You must include a Color`
4. Create 2 getter methods:
    - `getColor` for getting the value of the `#color` property and `getBrand` for getting the value of `#brand` property
5. Run your code.
6. Test your code.
*/
// Write your code here
class Car {
	#brand;
	#color;
	constructor(brand, color) {
		this.#brand = brand;
		this.#color = color;
	}
	setBrand(brand) {
		if (brand) {
			this.#brand = brand;
		} else {
			throw new Error("You must include a Brand");
		}
	}
	setColor(color) {
		if (color) {
			this.#color = color;
		} else {
			throw new Error("You must include a Color");
		}
	}
	getBrand() {
		return this.#brand;
	}
	getColor() {
		return this.#color;
	}
}

// DO NOT EDIT CODE BELOW
module.exports = Car;
