/*
Directions: Check your understanding of the instruction you just received by completing the activity below.

A Greeting component has been created for you. Customize the card by passing name and mood props in App.js and rendering the values in Greeting.js.

In App.js:

    Import the Greeting component.
    Inside the function App return statement, render THREE Greeting components.
    Give each Greeting component the following props and corresponding values:
        name: A name of the individual
        mood: The current mood of the individual.
*/
import React from 'react';
// Import the Greeting Component
import Greeting from "./components/Greeting.js";



function App() {
    return (
        <div className = "app">
            {/* render 3 Greeting cards here */}
	    <Greeting name="first" mood="happy"/>
	    <Greeting name="second" mood="okay"/>
	    <Greeting name="third" mood="sad"/>
            



        </div>
    )
}

export default App;
