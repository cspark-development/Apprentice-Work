/*
Test #1: Read and Update Values
Using dot notation or bracket notation, assign the nycPopulation variable to the value of the population property.
Using dot notation or bracket notation, add a new property to newYorkCity with a key of state and a value of "New York".
Test your code!
Test #2: numberLandmarks() Method
Inside newYorkCity, define a method called numberLandmarks() that returns the number of items in the array that is assigned to the famousLandmarks property. Do not simply hardcode this. It should actually check how many values are stored in the array.
*/

// DO NOT EDIT
let nycPopulation;

const newYorkCity = {
  name: "New York City",
  country: "United States",
  population: 8400000,
  famousLandmarks: [
    "Statue of Liberty",
    "Empire State Building",
    "Central Park",
  ],
  boroughs: ["Manhattan", "Queens", "Brooklyn", "Bronx", "Staten Island"],
  timezone: "America/New_York",
  nickname: "The Big Apple",
  // Define your method here
};

// Write the rest of your code here
nycPopulation = newYorkCity.population;
newYorkCity.state = "New York";
newYorkCity.numberLandmarks = function () {
  return this.famousLandmarks;
};

console.log(nycPopulation);
console.log(newYorkCity.state);
console.log(newYorkCity.numberLandmarks());
