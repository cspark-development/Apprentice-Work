/*
1. Create a class named `Student` which includes two private properties:
    - `name`
    - `grade`
2. In the `Student` constructor method, you will include two arguments, one for `name` and one for `grade`, and assign them to your private fields `name` and `grade`.
3. Create a setter method called `setName` that will take a `name` as an argument and set `name` to the value of the instance of the student's name.
4. Create a setter method called `setGrade` that will take a `grade` as an argument and set `grade` to the value of the instance of the student's grade.
5. Create a getter method called `getName` that will return the value of the `name` of the instance of your `Student` class.
6. Create a getter method called `getGrade` that will return the value of the `grade` of the instance of your `Student` class.
7. Run your code.
8. Test your code.
*/
// Write your code here
class Student {
	#name;
	#grade;
	constructor(name, grade) {
		this.#name = name;
		this.#grade = grade;
	}
	setName(name) {
		this.#name = name;
	}
	setGrade(grade) {
		this.#grade = grade;
	}
	getName(name) {
		return this.#name;
	}
	getGrade(grade) {
		return this.#grade;
	}
}

// DO NOT EDIT CODE BELOW
module.exports = Student;
