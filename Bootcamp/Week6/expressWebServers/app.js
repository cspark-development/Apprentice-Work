/*
Directions: Check your understanding of the instruction you just received by completing the activity below.

 

An index.html file has been created for you in a folder called public.

 

GOAL: Create an Express web server that serves the index.html file located in the public folder.

In app.js:

    Create a variable called app that initializes an Express application with express().
    Invoke app.use() method with express.static() to serve the content that is located in the public folder.

In server.js:

 

A port and a url  variable have already been declared for you with special values added so Sphere can be accessed from outside it's container.

    Invoke app.listen() method adding the port variable and callback function to log to the console ‘Server listening at URL’ where URL is the url variable
    Run your code. This should log the container url to the console in Sphere. Note: the Sphere container will time out and exit after 30 minutes. If this happens, click ‘Run’ again to restart the server. 
    View your application by copying the url and pasting it in a browser bar. You should see the message "Your First Express Application!" in the browser. IMPORTANT: Sphere doesn't support “CTRL/CMD+ C” in the terminal. In order to copy the url you will need to right click on the text and select copy.
    Test your code
*/
const express = require("express");
// DO NOT EDIT CODE ABOVE

// Write your code here
const app = express();
app.use(express.static("public"));


//DO NOT EDIT CODE BELOW
module.exports = app;
