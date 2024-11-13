/*
In Button.js:

    At the top of the file, import { useState } from the ’react’ package.
    Inside the Button function, initialize a new piece of state called count and a corresponding setter function. Initialize count with a value of 0.
    Render the current count in your JSX with the text “Clicked COUNT time”.
    Create a handler function called handleClick that increments count by 1 using the state setter function you declared in step 2.
    Inside the opening <button> tag, create an onClick event handler and pass it your handleClick function.
    Run your code.

    View your application. The UI should now update every time the button is clicked!
*/
import React, { useState } from "react";
// Import useState here

function Button() {
	// Initialize state here
	const [clicks, setClicks] = useState(0);

  	// Create handleClick function here
	function handleClick() { 
		setClicks(clicks + 1);	
	}
 
  	return (
  	  
		<>
			{/* Render count state in the h1*/}
			<h1>Clicked {clicks} times</h1>
			{/* Call handleClick function when clicking the button*/}
  	    		<button onClick={handleClick}>Click Me</button>
		</>
  	);
}

export default Button;
