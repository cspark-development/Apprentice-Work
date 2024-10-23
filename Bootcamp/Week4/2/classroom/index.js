/*
The following class has been created for you:

| Person |
| --- |
| String name |
| --- |
| greet() : String |

**Properties**
- name is provided to the constructor function.
**Methods**
- greet() returns the string "Hello, my name is <name>."

1. TASK: Create the following two classes that extends the Person class:

| Student |
| --- |
| String level |
| --- |
| study() : String |

| Teacher |
| --- |
| String department |
| --- |
| teach() : String |

`Student`
2. Create a Student class with the following properties and methods
- Properties
    - name and level are provided to the constructor function
- Methods
    - study() returns a string "<name> is studying for <level> exams."
3. Run your code.

**Example:**
```javascript
const student = new Student("Alan Turing", "first year");
const greeting = student.greet();
console.log(greeting);
// logs "Hello, my name is Alan Turing."
const studying = student.study();
console.log(studying);
// logs "Alan Turing is studying for first year exams."
```

`Teacher`
4. Create a Teacher class with the following properties and methods
- Properties
    - name and department are provided to the constructor function
- Methods
    - teach() returns a string "<name> is teaching <department>."
5. Run your code.
6. Test your code.
*/

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}
// Write your code here
class Student extends Person {
	constructor(name, level) {
		super(name);
		this.level = level;
	}
	study() {
		return `${this.name} is studying for ${this.level} exams.`;
	}
}

class Teacher extends Person {
	constructor(name, department) {
		super(name);
		this.department = department;
	}
	teach() {
		return `${this.name} is teaching ${this.department}.`;
	}
}


// DO NOT EDIT CODE BELOW
module.exports = {
  Person,
  Student,
  Teacher,
};
