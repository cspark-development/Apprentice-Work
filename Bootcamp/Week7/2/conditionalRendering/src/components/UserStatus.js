/*
In UserStatus.js:

    An object has been passed to each UserStatus component with a prop of data. Import useState at the top of the file.
    Initialize a state of loggedIn that is initially set to the value stored in props.data.isLoggedIn.
    In the h5 element, conditionally render the following:
        If loggedIn is true, return the string "NAME is currently logged in" where NAME is the value of props.data.username.
        If loggedIn is false, return the string “NAME is not logged in” where NAME is the value of props.data.username.
    Create a handleClick function that will update loggedIn when the button is clicked. If isLoggedIn is true, set the value to false and vice versa.
    Below the h5 element, conditionally render the following:
        If loggedIn is true, then render a button with the text “Logout” and create an onClick event handler that passes handleClick to the event.
        If loggedIn is false, then render a button with the text “Login” and create an onClick event handler that passes handleClick to the event.
    Run your code.

    View your application

    . Your page should look like the image above and the output should change every time the button is clicked.
    Test your code.
*/
import React, { useState } from 'react';
// Import useState here

function UserStatus(props) {

	const [loggedState, setLoggedState] = useState(props.data.isLoggedIn);

	function handleClick() {
		setLoggedState(!loggedState);
	}

	return (
		<div className = "card">
			<div className ="card-body">
				<h5 className = "card-title">{props.data.username} is {loggedState ? "currently" : "not"} logged in</h5>
    	    	    	    	<button onClick={handleClick}>{loggedState ? "Logout" : "Login"}</button>
    	    	    	</div>
    	    	</div>
    	)
}

export default UserStatus;
