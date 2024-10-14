/*
Declare a variable called avengers. Initialize it to an array of the following values: "Iron Man", "Thor", "Captain America", "The Hulk", "Spider Man", "Ant Man", "Batman".
Using index notation, assign the third avenger in the array to the thirdAvenger variable.
Using index notation, replace "The Hulk" with "Captain Marvel".
*/

// DO NOT EDIT
let thirdAvenger;

// Write your code here
let avengers = [
  "Iron Man",
  "Thor",
  "Captain America",
  "The Hulk",
  "Spider Man",
  "Ant Man",
  "Batman",
];

thirdAvenger = avengers[2];
avengers[3] = "Captain Marvel";

console.log(thirdAvenger);
console.log(avengers);
