/*
Create the function positiveDifference(a, b) which returns the positive difference between a and b.

Example
positiveDifference(10, 3) // 7

positiveDifference(2, 6) // 4
*/

function positiveDifference(a, b) {
  if (a < b) {
    return positiveDifference(b, a);
  }
  return a - b;
}

console.log(positiveDifference(10, 3));
console.log(positiveDifference(2, 6));
console.log(positiveDifference(6, 6));
