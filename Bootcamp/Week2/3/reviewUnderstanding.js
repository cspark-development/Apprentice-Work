/*
Test #1: whileCounting
Inside the whileCounting function do the following:

Initialize a count variable with a value of 1.
Create a while loop that console.log's all values from 1 to 20.

Test #2: onlyEvens
Inside the onlyEvens function do the following:

Initialize a for loop that increments from 1 to 100.
console.log ONLY numbers that are even.

Test #3: complementGenerator
The function complementGenerator an array of names. Inside the function, do the following:
complementGenerator should return an updated array with the string “ is the best!” added to the end of each name.

*/

function whileCounting() {
  // TEST #1 CODE HERE
  let count = 1;
  while (count <= 20) {
    console.log(count++);
  }
}

function onlyEvens() {
  // TEST #2 CODE HERE
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function complimentGenerator(names) {
  // TEST #3 CODE HERE
  let best = [];
  names.forEach((element) => {
    best.push(`${element} is the best!`);
  });
  return best;
}

whileCounting();

onlyEvens();

console.log(complimentGenerator(["Kari", "Dana", "Tammy"]));
