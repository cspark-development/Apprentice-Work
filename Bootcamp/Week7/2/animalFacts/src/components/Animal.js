/*
In /components/Animal.js:

    Update the function Animal to have props as a parameter.
    In the h1 element return ANIMAL_NAME ANIMAL_EMOJI for the animal.
    In the p element return Fun Fact: ANIMAL_FUNFACT for the animal.
    In the button opening tag, create an onClick event that passes the updateAnimal function.
    Run your code.
    View your application. The output should look like the GIF above.
    Test your code.
*/
import React from "react";

function Animal(props) {

	function handleClick() {
		props.updateAnimal();
	}

	return (
  	  <div className="card">
  	    <div className="card-body">
  	      <h1>{props.data.name} {props.data.emoji}</h1>
  	      <p>Fun Fact: {props.data.funFact}</p>
  	    </div>
  	    <button className="btn btn-primary" onClick={handleClick}>Next Animal</button>
  	  </div>
  	);
}

module.exports = Animal;
