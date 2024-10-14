/*
Write a function, sumDigits, that sums up all the digits of a number passed in as an argument. You can assume that the argument will be a positive integer. Use recursion.
*/

function sumDigits(number) {
  if (number.length <= 0) {
    return number;
  }
  if (typeof number === "number") {
    numberArray = String(number).split("");
    let sum = Number(sumDigits(numberArray));
    return sum;
  } else if (typeof number === "object") {
    let sum = Number(sumDigits(number.slice(0, -1)));
    sum += Number(number[number.length - 1]);
    return sum;
  }
}

console.log(sumDigits(333));

function findDuplicates(array) {
  let count = 0;
  let visited = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j || visited.includes(array[i])) {
        continue;
      }
      if (array[i] === array[j]) {
        count++;
        visited.push(array[i]);
      }
    }
  }
  return count;
}

const names = ["Sofia", "Muhammed", "Sofia"];

console.log(findDuplicates(names));
