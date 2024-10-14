/*
Write a function, countToTen, that receives a number less than or equal to 10 as an argument.
countToTen should console.log every number between the given number and 10, including 10. Use recursion.
Important Note: The test for this function checks how many times you call console.log. If you use console.log for debugging purposes, that’s great! But your test will likely fail, so comment out unnecessary console.log’s when you want to see if you’re passing the test!
*/

function countToTen(number) {
  if (number < 10) {
    console.log(number);
    countToTen(number + 1);
  } else if (number === 10) {
    console.log(number);
  } else if (number > 10) {
    return 0;
  }
}

countToTen(5);
