/*
Define a GET /users that sends back all users and a POST /users route that adds a user to the end of the array.

In users.js:

    A router has been initialized in a variable called router. Using router.use(), allow the app to use JSON and urlencoded middleware.
    Define a GET / route that returns all users in the users array.
    Define a POST / route that:
        Parses the data in the body of the request
        Adds the user to the end of the array
        Sends back a response with the users array updated with the new user.

In app.js:

    Import the users router using require.
    Mount the users router to the endpoint of /users with app.use.
    Start your server. Note: the Sphere container will time out and exit after 30 minutes. If this happens, click ‘Run’ again to restart the server. 
    Test that you can send a JSON object and urlencoded data to POST /users with Postman. Remember to use the Sphere-generated URL.
    Test your code.
*/
const express = require("express");
const app = express();

// Write your code here
const userRouter = require("./routes/users.js");
app.use("/users", userRouter);

module.exports = app;
