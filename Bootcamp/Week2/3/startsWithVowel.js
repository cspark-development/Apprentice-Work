/*
The function startsWithVowel(words) accepts an array of words as an argument. Update the function so that it returns an array of only the words that start with a vowel.
HINT: Make sure to account for both uppercase and lowercase letters.
*/

function startsWithVowel(words) {
  vowelWords = [];
  words.forEach((element) => {
    if (element.match("^[AEIOUaeiou]")) {
      vowelWords.push(element);
    }
  });
  return vowelWords;
}
console.log(startsWithVowel(["Alaska", "Tango"]));
