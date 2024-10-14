/*
Given a string variable, item, use a conditional statement to set the found variable to:
true if the item is equal to 'Penny'
true if the item is equal to 'Dime'
false if the item is any other value
Run your code. Try changing item to different values (by uncommenting lines 3-5 separately) and verify that found is set to the correct boolean in different scenarios!
*/

let item = "Penny";
//let item = "Dime";
// let item = 'Rock';
// let item = 'Paper';

let found;

// Write Your Code Here
found = item === "Penny" || item == "Dime";

console.log(found);
