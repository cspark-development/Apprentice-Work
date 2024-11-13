/*
In Form.js:

    Create two state and state setter functions:
        State of firstName and a state setter function. Initialize firstName with a value of an empty string.
        State of age and a state setter function. Initialize age with a value of 20.
    In the <input> elements do the following:
        In the first <input> element, assign it a value of firstName.
        In the second <input> element, assign it a value of age.
    In the first <input> element, create an onChange that takes the event as an argument and and uses the first name state setter function to update state to the event.target.value.
    In the second <input> element, create an onChange that takes the event as an argument and and uses the age state setter function to update state to the event.target.value.
    In the <p className = "name"> output the value stored in firstName in the string "Your name is NAME".
    In the <p className = "age"> output the value stored in age in the string "Your age is AGE".
    Run your code.
    View your application. You should see the output as you change the value in the two input fields.
    Test your code.
*/
import { fireEvent } from "@testing-library/react";
import React, { useState } from "react";

function Form() {
	const [firstName, setFirstName] = useState("");
	const [age, setAge] = useState(0);

	const onChange = (setter) => (event) => {
		setter(event.target.value)
	}

	return (
  	  <>
  	    <form>
  	      <label>
  	        First name:
  	        {/* First name input element */}
  	        <input name="firstName" onChange={onChange(setFirstName)}/>
  	      </label>

  	      {/* Age input element */}
  	      <label>
  	        Age:
  	        <input type="number" name="age" onChange={onChange(setAge)}/>
  	      </label>
  	    </form>
  	    <p className="name">Your name is {firstName}</p>
  	    <p className="age">Your age is {age}</p>
  	  </>
  	);
}

module.exports = Form;
