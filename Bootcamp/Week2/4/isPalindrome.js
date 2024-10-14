/*
A palindrome is a word that is spelled the same forwards and backwards. For example, "LEVEL", "RACECAR", and “KAYAK” are all palindromes, while "MOTOR", "RUDDER", and “DOGGED” are not palindromes.

Write a recursive function, isPalindrome, to check if a string is a palindrome.
Return true if the string is a palindrome; otherwise, return false.
*/

function isPalindrome(array) {
  if (array.length <= 0) {
    return true;
  }
  if (array[0].toLowerCase() === array[array.length - 1].toLowerCase()) {
    return Boolean(isPalindrome(array.slice(1, -1))) && true;
  } else {
    return Boolean(isPalindrome(array.slice(1, -1))) && false;
  }
}

console.log(isPalindrome("Straw warts"));
console.log(isPalindrome("saraw warts"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("KAYAK"));
console.log(isPalindrome("racecaa"));
