/*
In components/Color.js:

    Destructure the props in the function Color definition.
    Under the comment “attach color onClick handlers”, create an onClick event handler for each color button (4 total). Pass it the setColor function and the color that the button represents.
*/
import React from "react";

function Color(props) {

	const handleClick = (color) => (event) => {
		props.setter(color);
	}

	return (
  	  <div className="step">
  	    <h4>Choose your Color</h4>
  	    <div>
  	      {/* attach onClick handlers */}
  	      <button className="red" onClick={handleClick("red")}>red</button>
  	      <button className="green" onClick={handleClick("green")}>green</button>
  	      <button className="blue" onClick={handleClick("blue")}>blue</button>
  	      <button className="black" onClick={handleClick("black")}>black</button>
  	    </div>
  	  </div>
  	);
}

module.exports = Color;
