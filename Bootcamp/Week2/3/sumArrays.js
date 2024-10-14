/*
Directions: Complete the following steps:   

Write a function, sumArrays, that takes an array of numbers
sumArrays should return the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/

function sumArrays(numbers) {
  let sum = 0;
  numbers.forEach((element) => {
    if (typeof element === "number") {
      sum += element;
    }
  });
  return sum;
}

console.log(sumArrays([10, 5, 15]));
console.log(sumArrays(["test", 5, 15]));
console.log(sumArrays(["test", "test2", "test3"]));
