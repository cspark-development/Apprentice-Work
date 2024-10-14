/*
Test #1: dogNames
An array of dogNames has been created for you.

Using index notation, assign the variable fifthDog to the value of the fifth dog ("Lucy").
Using index notation, reassign the sixth dog from "Daisy" to "Fido".
 

Test #2: outdoorActivities
An array of outdoorActivities has been created for you.

Using array methods, add the activity "Swimming" to the BEGINNING of the outdoorActivities array.
Using array methods, add the activity "Rock Climbing" to the END of the outdoorActivities array.
 

Test #3: bands
An array of bands has been created for you.

Using array methods, remove the first band ("Coldplay") from the bands array.
Using array methods, remove the last band ("Led Zeppelin") from the bands array.
Using array methods, remove the band "Green Day" from the bands array.
*/

// DO NOT EDIT
const dogNames = [
  "Buddy",
  "Max",
  "Charlie",
  "Bailey",
  "Lucy",
  "Daisy",
  "Rocky",
];

// DO NOT EDIT
let fifthDog;

// DO NOT EDIT
const outdoorActivities = [
  "Hiking",
  "Camping",
  "Fishing",
  "Kayaking",
  "Biking",
];

// DO NOT EDIT
const bands = [
  "Coldplay",
  "The Beatles",
  "Queen",
  "U2",
  "Radiohead",
  "The Rolling Stones",
  "Fleetwood Mac",
  "Green Day",
  "Oasis",
  "Led Zeppelin",
];

// Write your code here
fifthDog = dogNames[4];
dogNames[5] = "Fido";

outdoorActivities.unshift("Swimming");
outdoorActivities.push("Rock Climbing");

bands.shift();
bands.pop();
bands.splice(bands.indexOf("Green Day"), 1);

console.log(dogNames);
console.log(outdoorActivities);
console.log(bands);
