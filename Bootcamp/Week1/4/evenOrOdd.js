/*
Write a function named evenOrOdd that will take a number as input
Your evenOrOdd function will check the value of the number passed in and do the following:
If the number is even, return the String: "Your number XX is even".
If the number is odd, return the String: "Your number XX is odd".
*/

function evenOrOdd(input) {
  if (input % 2) {
    return "Your number " + input + " is odd";
  } else {
    return "Your number " + input + " is even";
  }
}

console.log(evenOrOdd(8));
