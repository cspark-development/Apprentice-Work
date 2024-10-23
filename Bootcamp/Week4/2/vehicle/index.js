/*
The following class has been built for you:

| Vehicle |
| --- |
| String make |
| String model |
| int year |
| --- |
| static getAge(vehicle) : int |

**Properties**
- make, model, and year are provided to the constructor function

**Methods**
- getAge(vehicle) is a static method that returns the total age of the vehicle passed to the method

1. Create the additional extended class, `Car`:

| Vehicle |
| --- |
| String make |
| String model |
| int year |
| --- |
| static getAge(vehicle) : int |

| Car |
| --- |
| int numDoors |
| --- |
| static hasFourDoors(vehicle) : Boolean |

**Properties**
- `numDoors` is provided to the constructor function.
**Methods**
- `hasFourDoors(vehicle)` returns a boolean depending on whether the vehicle has 4 doors or not.

2. Run your code.
3. Test your code.
*/
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  static getAge(vehicle) {
    const currentYear = new Date().getFullYear();
    return currentYear - vehicle.year;
  }
}
// Write your code here
class Car extends Vehicle {
	constructor(make, model, year, numDoors) {
		super(make, model, year)
		this.numDoors = numDoors;
	}
	static hasFourDoors(vehicle) {
		return (vehicle.numDoors === 4);
	}
}

// DO NOT EDIT CODE BELOW
module.exports = {
  Vehicle,
  Car,
};
