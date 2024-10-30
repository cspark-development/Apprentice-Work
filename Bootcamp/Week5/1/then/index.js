/*
Directions: Check your understanding of the instruction you just received by completing the activity below.

 

Because of the way .then works, there are no tests in this exercise. Simply use the “Run” button to check the console logs!

 

Use fetch(), .then, and catch to log a random cat fact to the console using the following endpoint: https://meowfacts.herokuapp.com/?count=1.

    Make a fetch request to https://meowfacts.herokuapp.com/?count=1
    Call .then on fetch. Give .then a parameter of response and parse the response using .json().
    Call a second .then on fetch. Give this second .then a parameter of data and log the data to the console.
    Finally, create a catch block. This should have a parameter of error and should log error to the console.
    Run the code a few times to see random cat facts printed to the console!
    Run your code.

    Certify that your code works and you see the following in my console:

    {
      data: [
        'Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible.'
      ]
    }
*/
const fetch = require("isomorphic-fetch");
// DO NOT EDIT ABOVE THIS LINE

// YOUR CODE
fetch("https://meowfacts.herokuapp.com/?count=1").then((response) => { 
	const data = response.json();
	console.log(data);
}).catch((error) => { 
	console.log(error) 
});
