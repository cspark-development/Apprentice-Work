/*
1. Create a class named `Automobile`. This class should contain a constructor method that will initialize the automobile with:
- A property of `miles` (initially set to 0).
- A property of `type` (set equal to the `type` passed in to the constructor method).
Add 2 methods to the `Automobile` class.
2. The first method will be a regular method named `driveMiles` which will:
- Take a number of `miles` as a parameter/argument.
- The argument passed in should increment the value of the property `miles` to the instance of the automobile class.
- Finally, the method should return the value of the property `miles`
3. The second method should be a static method named `typeIsValid(type)`.
- In this method, you will define a constant array named validTypes with the values “car”, "truck”, “motorcycle”
- Your static method should return a boolean which checks if the type passed in as an argument matches any of the types defined in the first step.
4. Run your code.
5. Test your code.
*/

// Write your code here
class Automobile {
	constructor(type) {
		this.miles = 0;
		this.type = type;
	}
	driveMiles(miles) {
		this.miles += miles;
		return this.miles;
	}
	static typeIsValid(type) {
		const validTypes = [ "car", "truck", "motorcycle" ];
		return validTypes.includes(type);
	}
}

// DO NOT EDIT CODE
module.exports = Automobile;
