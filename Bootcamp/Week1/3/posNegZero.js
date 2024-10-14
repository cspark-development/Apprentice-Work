/*
Declare a variable called sign.
Given the value of num (a number), and set the value of sign to a string based on the following:
If the value of num is zero, set sign to None
If the value of num is positive, set sign to Positive
If the value of num is negative, set sign to Negative
*/

// let num = 0;
//let num = -9;
let num = 4;
// DO NOT EDIT ABOVE

//Your code below
let sign;
if (num === 0) {
  sign = "None";
} else if (num > 0) {
  sign = "Positive";
} else if (num < 0) {
  sign = "Negative";
}

console.log(sign);
