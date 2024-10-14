/*
Write a function, countVowels, that accepts a string as an argument
countVowels should return the number of vowels in that string. Use recursion.
*/

// Write your code here
function countVowels(string) {
  if (string.length <= 0) {
    return 0;
  }
  let sum = countVowels(string.slice(0, -1));
  if (string[string.length - 1].match("[aeiouAEIOU]")) {
    sum++;
  }
  return sum;
}

console.log(countVowels("Four score and seven years"));
console.log(countVowels("life is like a box of chocolates"));
