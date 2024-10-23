/*
1. Create the following `Duck` class using JavaScript's class syntax:

| Duck |
| --- |
| String name |
| String beakColor |
| number age |
| --- |
| quack(): String |

2. Properties
- The `name`, `beakColor`, and `age` are provided to the `constructor` function.
3. Methods
- `quack()` Returns a string that says `NAME the duck with the COLOR beak says quack quack`
*/
// Write your code here
class Duck {
	constructor(name, beakColor, age) {
		this.name = name;
		this.beakColor = beakColor;
		this.age = age;
	}
	quack() {
		return `${this.name} the duck with the ${this.beakColor} beak says quack quack`
	}
}

// DO NOT EDIT CODE BELOW
module.exports = {
  Duck,
};
