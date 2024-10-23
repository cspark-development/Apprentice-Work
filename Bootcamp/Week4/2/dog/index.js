/*
**GOAL**: You have been provided the following class `Mammal`, your task is to create a class `Dog` that inherits the properties and methods from its parent class `Mammal`
1. Your class `Dog` should receive both `name` and `owner` parameters (both strings) in its constructor:
- It should be able to pass the `name` parameter to the `Mammal` `super` class.
- Your `Dog` class' `owner` property should be initialized with the `owner` parameter.
2. Your class `Dog` should inherit the method `eats()` from the class `Mammal`. Create an instance of `Dog` and call `eats()` to verify this.
3. Your class `Dog` should also contain its own method called `hasOwner()` which checks to see if the `Dog` was initialized with an owner and return `true`.
4. Run your code.
5. Test your code.
*/

class Mammal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    return `${this.name} eats Food`;
  }
}
// Write your code here
class Dog extends Mammal {
	constructor(name, owner) {
		super(name);
		this.owner = owner;
	}


}

// DO NOT EDIT CODE BELOW
module.exports = {
  Dog,
  Mammal,
};
