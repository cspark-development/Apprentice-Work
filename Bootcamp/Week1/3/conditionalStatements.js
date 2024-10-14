/*
Assign myMood to the value of 'happy' if weather has a value of 'sunny'.
Assign myMood to the value of 'sad' if weather is anything else.
Do not set the value of myMood to be explicitly happy or sad
Run your code. Try uncommenting line 3 of index.js to verify that myMood changes when weather is set to different values.
*/

let weather = "sunny";
//weather = 'rainy';

let myMood;

// YOUR CODE
if (weather === "sunny") {
  myMood = "happy";
} else {
  myMood = "sad";
}

console.log(myMood);
