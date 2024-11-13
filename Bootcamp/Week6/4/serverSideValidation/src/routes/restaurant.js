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
*/
const express = require("express");
const router = express.Router();
const restaurantData = [
  { name: "Bobs Burgers", location: "New York City" },
  { name: "Harry's Fish Shack", location: "London" },
  { name: "Elizabeth's Hot Dogs", location: "Chicago" },
];
// DO NOT EDIT CODE ABOVE
const {check, validationResult} = require("express-validator");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", (request, response) => {
	response.json(restaurantData);
});

router.post("/", [check("name").not().isEmpty().trim(),], (request, response) => {
	const errors = validationResult(request);
	if (!errors.isEmpty()) {
		response.json({ error: errors.array() });
		return;
	}

	restaurantData.push({ name: request.body.name, location: request.body.location });
	response.json(restaurantData);
});

// DO NOT EDIT CODE BELOW
module.exports = router;

