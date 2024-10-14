/*
Declare a new variable, response.
Given the current values of these variables, create a conditional statement (if, else if, and else) that will set response to a string based on how a traffic light works:
If the light is green (i.e. green has the value of true), set response to Go!
If the light is yellow, set response to Slow Down!
If the light is red, set response to Stop!
If none of the lights are on (none are true), the the traffic light is broken! Set response to Traffic light is broken!
*/

let green = false;
let yellow = true;
let red = false;
// DO NOT EDIT ABOVE

//Your code below
let response;
if (green) {
  response = "Go!";
} else if (yellow) {
  response = "Slow Down!";
} else if (red) {
  response = "Stop!";
} else {
  response = "Traffic light is broken!";
}

console.log(response);
