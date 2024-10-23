/*
1. Create the following class:

| Person |
| --- |
| +String name |
| -int age |
| --- |
| +getAge() : int |
| +setAge(age) : void |

|In class diagrams + before a property or method means public, whereas - means private.|

**Properties**
- `name` and `age` are provided to the constructor method.

**Methods**
- `getAge()` is a getter for returning the value of the age private property
- `setAge(age)` is a setter for assigning a new value to the age private property

2. Run your code.

3. Test your code.
*/

// Write your code here
class Person {
	#age;
	constructor(name, age) {
		this.name = name;
		this.#age = age;
	}
	getAge() {
		return this.#age;
	}
	setAge(age) {
		this.#age = age;
	}
}

// DO NOT EDIT CODE BELOW
module.exports = Person;
