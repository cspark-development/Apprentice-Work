/*
In components/Input.js: Under the comment “attach onChange handler”, create an onChange event handler for the <input> element. In the onChange event handler, create an anonymous function that: Takes the event as an argument.
        Updates the words state by calling setWords and passing it the event.target.value.
In components/Input.js:

    Under the comment “attach onClick handlers” add an onClick event handler for the uppercase button.
    Set the onClick event handler above equal to anonymous function. The function should call setWords and pass it the uppercase version of the words.
        toUpperCase() should do the trick!
    Repeat the steps above for the lowercase button, but this should lowercase the words.
        toLowerCase() should do the trick!
    Run your code.
    View your application. End Result: You should be able to click buttons to colorize your words, and you should be able to change the words to all caps or all lowercase.
*/
import React from "react";

function Input(props){
	function handleChange(event) {
		props.setWords(event.target.value);
	}

	function handleClickUpper() {
		props.setWords(props.words.toUpperCase());
	}

	function handleClickLower() {
		props.setWords(props.words.toLowerCase());
	}

	return(
  	  <div className="step">
  	    <h4>Type your Word</h4>
  	    {/* attach onChange handler */}
  	    <input placeholder="Start Typing" aria-label="words" onChange={handleChange}/>
  	    <div>
  	      {/* attach onClick handlers */}
  	      <button onClick={handleClickUpper}>UPPERCASE</button>
  	      <button onClick={handleClickLower}>lowercase</button>
  	    </div>
  	  </div>
  	)
}

module.exports = Input;
