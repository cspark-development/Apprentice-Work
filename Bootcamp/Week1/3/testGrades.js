/*
Declare a new variable letterGrade.
Given the value of percentage (a number), set letterGrade to the correct string, based on the following:
If the student scores less than a 65, then the letterGrade is set to F.
If the student scores 65 or above, but below 75, then the letterGrade is set to D
If the student scores 75 or above, but below 80, then letterGrade is set to C
If the student scores 80 or above, but below 90, then letterGrade is set to B
If the student scores 90 or above, then letterGrade is set to A
*/

const percentage = 65;
// DO NOT EDIT CODE ABOVE

// Write Your Code Here
let letterGrade;

if (percentage < 65) {
  letterGrade = "F";
} else if (percentage >= 65 && percentage < 75) {
  letterGrade = "D";
} else if (percentage >= 75 && percentage < 80) {
  letterGrade = "C";
} else if (percentage >= 80 && percentage < 90) {
  letterGrade = "B";
} else if (percentage >= 90) {
  letterGrade = "A";
}

console.log(letterGrade);
