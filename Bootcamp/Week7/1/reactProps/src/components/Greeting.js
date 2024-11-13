/*
In Greeting.js:

    In the function Greeting definition, include a props parameter.
    In the h5 element, replace NAME with the value stored in props with a value of name.
    In the p element, replace MOOD with the value stored in props with a value of mood.
    Run your code.

    View your application. The page should look similar to the image below (but with the names and moods you used!).
*/
import React from "react";

function Greeting(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Hello my name is {props.name}</h5>
        <p className="card-text">Today I am feeling {props.mood}</p>
      </div>
    </div>
  );
}

export default Greeting;
