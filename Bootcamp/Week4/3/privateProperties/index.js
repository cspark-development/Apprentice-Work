/*
    Update the Passenger constructor with the following property visibility:
        Private Properties
            name
            passportNum
        Public Properties
            seatNumber
    Run your code.
    Test your code.
*/
class Passenger {
  	// Write your code here
	#name;
	#passportNum;
	constructor(name, passportNum, seatNumber) {
		// Write your code here
		this.#name = name;
		this.#passportNum = passportNum;
		this.seatNumber = seatNumber;
  	}
	// DO NOT EDIT CODE BELOW
  	getName() {
    		return this.#name;
  	}
  	getPassportNum() {
    		return this.#passportNum;
  	}
  	// DO NOT EDIT CODE ABOVE
}

// DO NOT EDIT CODE BELOW
module.exports = {
  Passenger,
};
