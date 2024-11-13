/*
In Car.js:

    Add props as a parameter for the Car function.
    Replace the CAR BRAND HERE with the car brand stored in props.
    Replace the CAR COLOR HERE with the car color stored in props.
    Run your code
*/
import React from "react";

function Car(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.data.brand}</h5>
        <p className="card-text">{props.data.color}</p>
      </div>
    </div>
  );
}

export default Car;
