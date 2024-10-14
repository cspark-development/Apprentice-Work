/*
Add "Cairo" to the end of the travelDestinations array.
Add "Mexico City" to the beginning of the travelDestinations array.
Update arrLen with the new length of travelDestinations after completing the two previous problems.
*/

// DO NOT EDIT
const travelDestinations = [
  "Paris",
  "Tokyo",
  "Bali",
  "New York City",
  "Cape Town",
];

// DO NOT EDIT
let arrLen;

// Write your code here
travelDestinations.push("Cairo");
travelDestinations.unshift("Mexico City");
arrLen = travelDestinations.length;

console.log(arrLen);
console.log(travelDestinations);
