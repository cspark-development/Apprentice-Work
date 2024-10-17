
let button;
let firstParagraph;
let specialParagraph;
let secondListItem;
// DO NOT EDIT CODE ABOVE

// Write your code here
/*
When the button is clicked, the text of the first paragraph should be changed to "Hello world!".
The special paragraph should be highlighted with a yellow background color.
The second item in the list should be changed to "New item".
The text of the button should be changed to "Clicked!".
*/
button = document.querySelector("#btn");
firstParagraph = document.querySelector("p");
specialParagraph = document.querySelector(".special");
const listItems = document.querySelectorAll("li");
secondListItem = listItems[1];

button.addEventListener("click", function() {
	firstParagraph.innerHTML = "Hello world!";
	specialParagraph.classList.add("highlight");
	secondListItem.innerHTML = "New item";
	button.innerHTML = "Clicked!";
})

// // DO NOT EDIT CODE BELOW
module.exports = {
  button,
  firstParagraph,
  specialParagraph,
  secondListItem,
};

