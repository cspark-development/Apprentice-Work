/*
Directions: Complete the following steps:  

 

Because of the way .then works, there are no tests in this exercise. Simply use the “Run” button to check the console logs!

 

Call fetch (imported above), and use .then and .catch log the pokemon data to the console. Click “Run” to check the logs in the console (there are no tests).

    Make a fetch request to https://pokeapi.co/api/v2/pokemon/3.
    chain .then after the fetch call. In here, using res as the first parameter of the callback, call res.json()
    chain another .then. In here, we have access to the data via the first parameter
    Log out the value of data.forms by running your code.
    You should see something in the console that looks like this:

[
  {
    name: 'venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon-form/3/'
  }
]

An example of using fetch was given in the lesson, but feel free to look up the docs on the fetch API!
*/
const fetch = require("isomorphic-fetch");
// DO NOT EDIT ABOVE

// YOUR CODE HERE
fetch("https://pokeapi.co/api/v2/pokemon/3").then((res) => {
	return res.json();
}).then((data) => {
	console.log(data.forms);
});
