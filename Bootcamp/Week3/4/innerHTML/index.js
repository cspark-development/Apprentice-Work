#!/bin/node
// Write your code here
/*
Let’s get the screen to update with the count!
Select for the following HTML elements using querySelector and storing each in their own variables:

    button as button
    h3 id = "counter" as output

Declare a variable called count and set the initial value to 0.
Create an addEventListener that runs every time the button is clicked. The event listener should:

    Increase count by 1
    Update the counter element with the value of count as a string containing Current Count: COUNT with COUNT being the current value of count.
*/

const button = document.querySelector(".btn.btn-primary");
const output = document.querySelector("#counter");
let count = 0;
button.addEventListener("click", function() {
	count++;
	output.innerHTML = `Current Count: ${count}`;
});

// DO NOT EDIT CODE BELOW
module.exports = {
  button,
  output,
  count,
};
