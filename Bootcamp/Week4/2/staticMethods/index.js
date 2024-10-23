/*
A Bag class has been created that has properties of name and weight.

    Create a static property of company that sets the airline to Boolean Airways.
    Create a static method of printAirline that returns the string Welcome to COMPANY! with the name of the airline.
    Run your code.
    Test your code.
*/

class Bag {
	constructor(name, weight) {
		this.name = name;
		this.weight = weight;
	}
	// Add your static property and method here
	static company = "Boolean Airways";	
	static printAirline() {
		return `Welcome to ${this.company}!`;
	}
}

// DO NOT EDIT CODE BELOW
module.exports = {
  Bag,
};
