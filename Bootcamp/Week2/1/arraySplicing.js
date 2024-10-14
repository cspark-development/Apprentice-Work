/*
Remove the first item ("Fish and Chips") from myFavFoods.
Remove the last item ("Downton Abbey") from favTVShows.
Remove "The Spice Girls" and "JLS" from popGroups.
*/

// DO NOT EDIT
const myFavFoods = ["Fish and Chips", "Tacos", "Pizza", "Pasta", "Sushi"];

// DO NOT EDIT
const favTVShows = [
  "Breaking Bad",
  "Game of Thrones",
  "The Crown",
  "Stranger Things",
  "Downton Abbey",
];

// DO NOT EDIT
const popGroups = [
  "Little Mix",
  "One Direction",
  "The Spice Girls",
  "JLS",
  "Girls Aloud",
];

// Write your code here
myFavFoods.shift();
favTVShows.pop();
popGroups.splice(popGroups.indexOf("The Spice Girls"), 1);
popGroups.splice(popGroups.indexOf("JLS"), 1);

console.log(myFavFoods);
console.log(favTVShows);
console.log(popGroups);
