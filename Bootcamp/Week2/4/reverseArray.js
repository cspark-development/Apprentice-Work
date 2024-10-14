/*
Write a function, reverseArray, that accepts an array as an argument
reverseArray should return a reversed copy of that array. Use recursion. Don’t mutate the original array.
*/

function reverseArray(array) {
  if (array.length > 0) {
    let reversedArray = [];
    let lastElement = array[array.length - 1];
    let rightArray = reverseArray(array.slice(0, -1));
    reversedArray.push(lastElement);
    return reversedArray.concat(rightArray);
  } else {
    return array;
  }
}

console.log(reverseArray(["T", "h", "i", "s"]));
console.log(reverseArray(["a", "b", "c", "d", "e", "f"]));
//reverseArray(["T", "h", "i", "s"]);
