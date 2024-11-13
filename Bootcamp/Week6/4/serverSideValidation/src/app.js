/*
Define a GET /restaurants that sends back all restaurants and a POST /restaurants route that adds a restaurant to the end of the array. If the HTTP request body doesn’t have a value in the key of name, an error should be returned.

In restaurant.js:

    require("express-validator") and destructure check and validationResult.
    A router has been initialized in a variable called router. Using router.use(), allow the app to use JSON middleware.
    Define a GET / route that returns all restaurants in the restaurantData array.
    Define a POST / route that:
        Checks that the field of name is not an empty string
        If the name field is empty, return an object with a key of error and an array of the errors
        If the name field contains information, add the restaurant to the end of the restaurantData array and return the updated array.

In app.js:

    Import the restaurants router using require.
    Mount the restaurants router to the endpoint of/restaurants with app.use.
    Start your server. Note: the Sphere container will time out and exit after 30 minutes. If this happens, click ‘Run’ again to restart the server. 
    Test that you can send a JSON object to POST /restaurants with Postman and test that you get an error array when you send an object with an empty name field. Remember to use the Sphere generated URL.
    Test your code.
*/
const express = require("express");
const app = express();
// Import and use routes here
const restaurantRouter = require("./routes/restaurant.js");
app.use("/restaurants", restaurantRouter);


// DO NOT EDIT CODE BELOW
module.exports = app;
