/*
The cartoon constant is assigned to an object. Inside that object, define a method called characterInfo(). It should return the string "Name: NAME and Occupation: OCCUPATION" where NAME is the value of the object's name property and OCCUPATION is the value of the object's occupation property.
*/

const cartoon = {
  name: "Bugs Bunny",
  species: "Rabbit",
  age: 80,
  occupation: "Trickster",
  catchphrase: "What's up, Doc?",
  friends: ["Daffy Duck", "Porky Pig", "Tweety Bird"],
  enemies: ["Elmer Fudd", "Yosemite Sam", "Marvin the Martian"],
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png",
  // Define your method here
  characterInfo: function () {
    return "Name: " + this.name + " and Occupation: " + this.occupation;
  },
};

console.log(cartoon.characterInfo());
