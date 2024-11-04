/*
Directions: Check your understanding of the instruction you just received by completing the activity below.

 

Create a /random route that returns the string Random number: VALUE with a value of 0, 1, or 2.

Inside app.get():

    Using Math.floor() and Math.random(), generate a random integer of 0, 1, or 2. Store the value in a variable.
    Using response.send(), send the string Random number: VALUE with the random value from the previous step.
    Run your code. Note: the Sphere container will time out and exit after 30 minutes. If this happens, click ‘Run’ again to restart the server. 
    View your application using the URL from the Sphere console.
    Test your code.
*/
const express = require("express");
const app = express();
// DO NOT EDIT CODE ABOVE

app.get("/random", (request, response) => {
	// Write your code here
	const data = Math.floor(Math.random() * 3);

	response.send(`${data}`);
});

// DO NOT EDIT CODE BELOW
module.exports = app;
