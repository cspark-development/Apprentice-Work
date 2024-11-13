/*
In components/Output.js:

    Destructure the props in the function Output definition.
    In the “words” span, under the comment “add styles here”, add the color to the style object.
    Run your code.
    View your application. Click the red button. The words should change color as you press the buttons.

In components/Output.js:

    Add the words to the props destructuring you created in the last section.
    Instead of the static “Your Words Here”, replace it with the value of words.
    Run your code.
    View your application. The words shown between the -- should reflect what is typed in the input box.
*/
import React from "react";

function Output(props) {
	return(
    	  <section className="step">
    	    <h1>-- 
    	      <span id="words" role="note" style={{color: props.color/* add styles here */}}>
		{props.words}
    	      </span>
    	    --</h1>
    	  </section>
    	)
}

module.exports = Output;
