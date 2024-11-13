/*
In App.js:

    At the top of the file, import { useState } from the ’react’ package.
    Inside the App function, initialize a new piece of state called index and a corresponding setter function that will track the index of the array. Initialize index with a value of 0.
    Create a function called updateAnimal that does the following:
        If index is currently not at the end of the array, then increment index by 1.
        If the index is currently the last value in the array, update index to 0.
    Pass two props to Animal:
        data that equals the animal with the current index. E.g. If index is 1, then data should equal the Giraffe object.
        updateAnimal that is equal to the updateAnimal function.
*/
import React, { useState } from "react";
import Animal from "./components/Animal";

function App() {
	const animals = [
  	  {
  	    name: "Elephant",
  	    funFact:
  	      "Elephants can communicate with each other using infrasound, which is a sound that is too low for humans to hear.",
  	    emoji: "🐘",
  	  },
  	  {
  	    name: "Giraffe",
  	    funFact:
  	      "Giraffes have extremely long necks, which help them to reach leaves and other food sources high up in trees.",
  	    emoji: "🦒",
  	  },
  	  {
  	    name: "Kangaroo",
  	    funFact:
  	      "Kangaroos are the only large animals that use hopping as their primary method of movement.",
  	    emoji: "🦘",
  	  },
  	  {
  	    name: "Penguin",
  	    funFact:
  	      "Penguins are excellent swimmers and can reach speeds of up to 22 miles per hour (35 km/h) in the water.",
  	    emoji: "🐧",
  	  },
  	  {
  	    name: "Sloth",
  	    funFact:
  	      "Sloths are known for their slow movement and spend up to 20 hours per day sleeping or resting.",
  	    emoji: "🦥",
  	  },
  	];

	const [index, setIndex] = useState(0);

	function updateAnimal() {
		if (index < animals.length - 1) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	}

  	return (
  	  <div id="app">
  	    <Animal data={animals[index]} updateAnimal={updateAnimal}/>
  	  </div>
  	);
}

module.exports = App;
