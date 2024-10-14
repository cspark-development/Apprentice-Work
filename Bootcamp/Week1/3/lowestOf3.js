/*
Given the variables num1, num2, and num3, use conditional logic AND logical operators to set smallestNum equal to
The value in num1 if num1 is lowest
The value in num2 if num2 is lowest
The value in num3 if num3 is lowest
*/

let num1 = 101;
let num2 = 1300;
let num3 = 900;
// DO NOT EDIT CODE ABOVE

let smallestNum;

// Write Your Code Here
if (num1 < num2 && num1 < num3) {
  smallestNum = num1;
} else if (num2 < num1 && num2 < num3) {
  smallestNum = num2;
} else {
  smallestNum = num3;
}

console.log(smallestNum);
