/*
Write a function, backwardString, that receives a string as an argument.
backwardString should log every letter in the string, from the last character to the first. Use recursion.
NOTE: As with the last problem, the tests will check how many times console.log is called.
*/

function backwardString(string) {
  if (string.length === 0) {
    return;
  } else {
    console.log(string.slice(-1));
    backwardString(string.slice(0, string.length - 1));
  }
}

backwardString("This is a test.");
