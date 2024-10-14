/*
Define a base case that returns 1 if num has a value of 1.
If the base case is false, define a recursive case that passes num - 1 to factorial and multiplies this with the current value of num. Don’t forget to return this value!
*/

function factorial(num) {
  // write your code here
  if (num === 1) {
    return 1;
  } else {
    let result = num;
    result *= factorial(num - 1);
    return result;
  }
}

console.log(factorial(5));
console.log(factorial(3));
