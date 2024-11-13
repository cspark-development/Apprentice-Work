/*
In Form.js:

    In the <input> element do the following:
        Assign it a value of name, using the value HTML attribute.
        Create an onChange event handler that takes the event as an argument and and uses setName to update name state to the event.target.value.

    Create a handleSubmit function that does the following:
        Takes the event as a parameter.
        Call preventDefault() on the event.
        Call setNamesArr and add the name to the end of the array. You can do this by spreading the current values into a new array and adding the current value of name at the end:

    setAnArray([
        ...currentArr,
        newValue
    ])

        Set name state back to an empty string.
    In the opening <form> tag, add the onSubmit={handleSubmit} to the form element
    Run your code.
    View your application. You should see the names added below every time you click “Add Name”
    Test your code.
*/
import React, { useState } from "react";

function Form() {
	const [name, setName] = useState("");
  	const [namesArr, setNamesArr] = useState([]);

	const onChange = (setter) => (event) => setter(event.target.value);

	function handleSubmit (event) { 
		event.preventDefault();
		setNamesArr([
			...namesArr,
			name	
		]);
		setName("");
	};

	return (
  	  <>
  	    <form id="form">
  	      <label>
  	        Name:
  	        {/* Name input element */}
  	        <input className="form-control" value="name" onChange={onChange(setName)}/>
  	      </label>
  	      <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
  	        Add Name
  	      </button>
  	    </form>
  	    <div id="card">
  	      <h3>Names Submitted</h3>
  	      {namesArr.map((item) => (
  	        <p>{item}</p>
  	      ))}
  	    </div>
  	  </>
  	);
}

module.exports = Form;
