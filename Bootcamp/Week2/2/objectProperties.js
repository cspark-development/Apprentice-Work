/*
Directions: Check your understanding of the instruction you just received by completing the activity below.

Using dot notation or bracket notation, assign the variable currentRole to the value of the profession property.
Using dot notation or bracket notation, add a new property with a key of location and a value of "London".
*/

// DO NOT EDIT
const person = {
  name: "Angelica Daniels",
  age: 35,
  profession: "Web Developer",
  interests: ["coding", "reading", "playing guitar"],
};

// DO NOT EDIT
let currentRole;

// Write your code here
currentRole = person.profession;
person.location = "London";

console.log(currentRole);
console.log(person.location);
