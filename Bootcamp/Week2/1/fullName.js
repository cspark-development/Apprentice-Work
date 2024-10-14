/*
Define a fullName() function with a single parameter: names. The value of this parameter will be an array of two names in the wrong order (surname first).
Implement the body of the function so that it returns, as a string, the full name in the correct order. Do not modify the array.
*/

function fullName(names) {
  return names[1] + " " + names[0];
}

console.log(fullName(["Spark", "Curt"]));
