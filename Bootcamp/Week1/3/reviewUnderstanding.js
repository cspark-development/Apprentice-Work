/*
The variable question1 contains the following expression:
let question1 = 92 > 32;
Reassign the value answer1 to contain the boolean value stored in question1. For example, if you think question1 contains true, then assign answer1 to contain the value of true.
The variable question2 contains the following expression:
let question2 = 32 === "32" || 100 > 121;
Reassign the value answer2 to contain the boolean value stored in question2.
A mood is stored in the variable question3. Create a conditional statement that does the following:
If question3 contains the value of happy, then update answer3 with the string ‘I am happy’
If question3 contains the value of sad, then update answer3 with the string ‘I am sad’
If question3 contains neither of these values, then update answer3 with the string ‘I am neither happy nor sad’
*/

let question1 = 92 > 32;
let question2 = 32 === "32" || 100 > 121;
let question3 = "happy";
let answer1;
let answer2;
let answer3;
// DO NOT EDIT CODE ABOVE

// Your Code Here
answer1 = question1;
answer2 = question2;
if (question3 === "happy") {
  answer3 = "I am happy";
} else if (question3 === "sad") {
  answer3 = "I am sad";
} else {
  answer3 = "I am neither happy nor sad";
}

console.log(answer1);
console.log(answer2);
console.log(answer3);
