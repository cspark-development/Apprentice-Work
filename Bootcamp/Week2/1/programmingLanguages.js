/*
Add "Go" to the beginning of programmingLanguages.
Add "TypeScript" to the end of programmingLanguages.
Reassign arrLen to the length of programmingLanguages after completing the two previous problems.
*/

// DO NOT EDIT
const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
  "Rust",
];

// DO NOT EDIT
let arrLen;

// Write your code here
programmingLanguages.unshift("Go");
programmingLanguages.push("TypeScript");
arrLen = programmingLanguages.length;

console.log(arrLen);
console.log(programmingLanguages);
