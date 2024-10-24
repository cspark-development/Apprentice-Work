/*
Lion Class

Properties

    name is provided to the constructor function.
    age is provided to the constructor function.
    id is a PRIVATE property provided to the constructor function.

Methods

    sound() returns a string of: "Roar!"
    getID() returns the id for the Lion
    setID(id) updates the id with the provided id
*/

class Lion {
	// Write your code here
	#id;
	constructor(name, age, id) {
		this.name = name;
		this.age = age;
		this.#id = id;
	}
	sound() {
		return "Roar!";
	}
	getID() {
		return this.#id;
	}
	setID(id) {
		this.#id = id;
	}
}

module.exports = Lion;
