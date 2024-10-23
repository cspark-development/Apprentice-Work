/*
1. Create a class called Zoo that uses a constructor method to initialize a name and a location for each Zoo instance.
2. Your Zoo class should have the following static properties:
- MAX_NUMBER_OF_ANIMALS Maximum Number of Animals set to 100
- NUMBER_OF_ROOMS Number of Rooms set to 10
3. Your Zoo class should have the following static method:
- listOfAnimals does nothing but return an array of animals containing (must be capitalized!):
    - Penguins
    - Zebras
    - Monkeys
    - Giraffe
    - Hippo
4. Run your code.
5. Test your code.
*/

// Write your code here
class Zoo {
	static MAX_NUMBER_OF_ANIMALS = 100;
	static NUMBER_OF_ROOMS = 10;
	constructor(name, location) {
		this.name = name;
		this.location = location;
	}
	static listOfAnimals() {
		return [ "Penguins", "Zebras", "Monkeys", "Giraffe", "Hippo" ];
	}
}

// DO NOT EDIT CODE BELOW
module.exports = Zoo;
