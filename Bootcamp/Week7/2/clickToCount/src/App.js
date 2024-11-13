/*
In App.js:

    Import { useState } from the same ’react’ package.
    Initialize a new piece of state called score with a corresponding setter function.
    Create a handleClick function that increases score by 1 using the setter function.
    Below the h1 element, render the current score in a p element with the text“Your score is SCORE”.
    Below the p element, add a button with the text “Click Me”.
    Add an onClick property to the button element, and pass it an the handleClick function
    Run your code.

    View your application. Your output should look like the image below after you clicked 3 times.
*/
import React, { useState } from "react";

function App() {
	const [score, setScore] = useState(0);

	function handleClick() {
		setScore(score + 1);
	}

	return (
		<>
			<h1>Your score is {score}</h1>
			<button onClick={handleClick}>Click Me</button>
  	  	</>
  	);
}

module.exports = App;
