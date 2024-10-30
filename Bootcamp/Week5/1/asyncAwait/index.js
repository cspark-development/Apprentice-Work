/*
Directions: Check your understanding of the instruction you just received by completing the activity below.

Create a function that returns a random cat fact using the following endpoint: https://meowfacts.herokuapp.com/?count=1.

    Mark the getCats() function as async.
    Make a fetch request to https://meowfacts.herokuapp.com/?count=1 and store the result in a variable called response. Don’t forget to await the response.
        TIP: If you don’t mark this as await and console.log(response), you will see Promise { <pending> }
    Create a variable called data and store the result of parsing the response using .json() in this variable. Don’t forget to await the response here as well.
    Return the data variable.

    Check that the function works by logging the returned data to the console before you return it from the function and then calling your getCats() function. You should see a response like:
     

    {
      data: [
        'Statistics indicate that animal lovers in recent years have shown a preference for cats over dogs!'
      ]
    }

    Run your code.
    Test your code.
*/
// DO NOT EDIT CODE ON THE NEXT LINE
const fetch = require("isomorphic-fetch");


// Add your code here
async function getCats() {
	const response = await fetch("https://meowfacts.herokuapp.com/?count=1");	
	const data = await response.json();

	return data;
}

// DO NOT EDIT CODE BELOW
module.exports = {
  getCats,
};


