/*
Complete the function random5 so it returns a random integer equal to either 1, 2, 3, 4 or 5.
*/

function random5() {
  return Math.floor(Math.random() * 5) + 1;
}

console.log(random5());
