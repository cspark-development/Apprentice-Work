/*
Assign to bootcampData the value of row two, column two in array2D.
Using bracket notation, reassign row one, column two of array2D to true.
*/

// DO NOT EDIT
const array2D = [
  [true, false],
  ["Bootcamp", "Multiverse"],
];

// DO NOT EDIT
let bootcampData;

// Write your code here
bootcampData = array2D[1][1];
array2D[0][1] = true;

console.log(bootcampData);
console.log(array2D);
