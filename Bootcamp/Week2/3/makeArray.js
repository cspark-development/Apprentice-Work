/*
Write a function called makeArray that does the following:
Create an empty array called arr.
Create a loop that pushes the numbers 0 to 100 to arr.
Return arr with all of the values.
*/

function makeArray() {
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(makeArray());
