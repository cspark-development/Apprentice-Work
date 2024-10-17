// Write your code here
/*
Select for the following HTML elements using querySelector and storing each in their own variables:

    button

Declare a variable called count and set the initial value to 0.
Create an addEventListener that runs every time the button is clicked. The event listener should:

    Increase count by 1
    Output the value of count to the console.
*/

let button = document.querySelector(".btn.btn-primary");
let count = 0;

button.addEventListener("click", function() {
	count++;
	console.log(count);
})


// DO NOT EDIT CODE BELOW
module.exports = {
  button,
  count,
};

