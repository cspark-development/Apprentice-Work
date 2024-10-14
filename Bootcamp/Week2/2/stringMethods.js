/*
We want phrase to be in all caps. Reassign the variable to the same string, but with all capital letters.
We need to know how long phrase is. Assign strLen to the length of phrase.
Split phrase into an array that contains each word. Assign words to the array.
*/

// DO NOT EDIT
let phrase = "I am learning how to use string methods.";
let strLen;
let words;

// Write your code here
phrase = phrase.toUpperCase();
strLen = phrase.length;
words = phrase.split(" ");

console.log(phrase);
console.log(strLen);
console.log(words);
