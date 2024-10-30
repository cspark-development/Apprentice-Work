/*
Directions: Complete the following steps:  

 

Create an asynchronous function that will return a pokemon from the PokeAPI using the following endpoint: https://pokeapi.co/api/v2/pokemon/3

    Declare an async function called fetchPokemon that takes no parameters.
    fetchPokemon should:
        Make a fetch request to https://pokeapi.co/api/v2/pokemon/3 (make sure to await it!). Store the response in a variable called response.
        Create a new constant data and set it equal to await response.json()
        Return data.forms
    Wrap the entire code in step 2 in a try block. Then add a catch block that logs the error to the console.
    Run your code.
    Test your code.
*/
const fetch = require("isomorphic-fetch");
// DO NOT EDIT ABOVE

// Write your code here
async function fetchPokemon() {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/3");
	const data = await response.json();
	
	return data.forms;
};

// DO NOT EDIT CODE BELOW
module.exports = fetchPokemon;
