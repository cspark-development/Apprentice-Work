/*
Check your understanding of the instruction you just received by completing the activity below.

Use .map to render 4 Car components that render data stored in a cars array.

In App.js:

    Use .map to iterate through the cars array and create 4 Car components.
    Each Car component should receive the corresponding object with a key of data.
*/
import React from "react";
import Car from "./components/Car";
// Data to pass as props
let cars = [
  { brand: "Tesla", color: "Red" },
  { brand: "Toyota", color: "White" },
  { brand: "VW", color: "Purple" },
  { brand: "Honda", color: "Green" },
];

function App() {
  return (
    <div className="app">
        {/* Render components here */}
	{cars.map((element) => <Car data={element}/>)};
    </div>
  )
}

export default App;
