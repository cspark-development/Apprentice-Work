/*
In App.js:

    Create a new piece of state called color and a setColor setter function. Initialize color as an empty string.
    Pass setColor to the Color component as a prop.
    Pass the color state to the Output component as a prop

In App.js:

    Create a new piece of state called words and a setWords setter function. Initialize words as an empty string.
    Pass words and setWords to the Input component as a prop.
    Pass words to the Output component as a prop.
*/
import React, {useState} from 'react';
import Color from "./components/Color";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
	// Initialize state here
	const [color, setColor] = useState("");
	const [words, setWords] = useState("");
    	
    	return (
    	  <>
    	    <section id="controls">
    	      <div className="step">
    	        <h1>Wordinator</h1>
    	      </div>
    	      <Color setter={setColor}/>
    	      <Input words={words} setWords={setWords}/>
    	    </section>
    	    <Output color={color} words={words}/>
    	  </>
    	)
}

module.exports = App;
