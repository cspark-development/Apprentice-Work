/*
TASK: A function called `doubleValues(arr)` has been created that:
    - Accepts an array of numbers as an argument
    - Returns an updated array with each value in the array doubled
    - Throws an error of `"Array can only contain numbers"` if the array contains a value that is not a number.

In `index.test.js`, write your tests, create tests that accomplish the following:

1. Create a test that tests that `doubleValues` returns an array of the initial values doubled.
2. Create a test that tests that `doubleValues` throws an error when the array contains a value that is not a number.
3. Click “Test” or in the console type npm run test.
*/
function doubleValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number")
      throw new Error("Array can only contain numbers");
    arr[i] = arr[i] * 2;
  }
  return arr;
}

module.exports = doubleValues;
