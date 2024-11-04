/*
Directions: Complete the following steps:   

 

Do all your coding in app.js

    TASK: We’ve created the server for you. Your job is to write an express route for GET /flipcoin that simulates a coin flip and sends back either “heads” or “tails” at random!
    Run your code. Note: the Sphere container will time out and exit after 30 minutes. If this happens, click ‘Run’ again to restart the server. 
    View your application using the url in the Sphere console.
    Test your code.
*/
const express = require("express");
const app = express();

// Write your code here
app.get("/flipcoin", (request, response) => {
	const rand = Math.floor(Math.random() * 2);
	response.send(rand ? "heads" : "tails");
});

// DO NOT EDIT CODE BELOW
module.exports = app;
