/*
Define a GET /users that sends back all users and a POST /users route that adds a user to the end of the array.

In users.js:

    A router has been initialized in a variable called router. Using router.use(), allow the app to use JSON and urlencoded middleware.
    Define a GET / route that returns all users in the users array.
    Define a POST / route that:
        Parses the data in the body of the request
        Adds the user to the end of the array
        Sends back a response with the users array updated with the new user.
*/
const express = require("express");
const router = express.Router();
const users = [
  { name: "Rick", age: 72 },
  { name: "Morty", age: 14 },
  { name: "Jerry", age: 42 },
];
// Define middleware and routes here
// Write your code here
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (request, response) => {
	response.json(users);
});

router.post("/", (request, response) => {
	users.push(request.body);

	response.json(users);
});

// DO NOT EDIT CODE BELOW
module.exports = router;
