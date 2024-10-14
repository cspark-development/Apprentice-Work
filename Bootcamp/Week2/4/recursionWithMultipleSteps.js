/*
A function called sumAll(num) has been created. The function takes a value, num, and returns the sum of all numbers between 0 and num.

Complete the following:

Define a base case that returns 0 if num has a value of 0.
If the base case is false, define a recursive case that passes num - 1 to sumAll and adds this to the current value of num. Don’t forget to return this value!

sumAll(5); // returns 15 ==> 1 + 2 + 3 + 4 + 5
sumAll(3); // returns 6 ==> 1 + 2 + 3
*/

function sumAll(num) {
  // Write your code here
  if (num === 0) {
    return 0;
  } else {
    let sum = num;
    sum += sumAll(num - 1);
    return sum;
  }
}

console.log(sumAll(5));
console.log(sumAll(3));
