/*
    Create a class called Person with the following properties:
        name
        age
        hometown
    Create a method called bio that returns a string that describes the person’s name, age, and hometown in the form of NAME is AGE and from HOMETOWN
    Run your code.
    Test your code.
*/
class Person {
	// Write your code here
	constructor(name, age, hometown) {
		this.name = name;
		this.age = age;
		this.hometown = hometown;
	}
	bio() {
		return `${this.name} is ${this.age} and from ${this.hometown}`;
	}

}
// DO NOT EDIT CODE BELOW
module.exports = {
  Person,
};
