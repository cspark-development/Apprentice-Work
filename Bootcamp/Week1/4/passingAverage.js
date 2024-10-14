/*
Declare a function named passingAverage that will take 4 numbers as parameters.
Your function is to do the following:
Add the 4 numbers passed in and divide by 4.
If the number is above a 90, return “You all passed with flying colors!”
If the number is below or equal to 90 but above an 80, return “You all passed, good job!”
If the number is below or equal to an 80 but above a 70, return “You all passed”
If the number is below or equal a 70 but above a 64, return “You barely made it”
In any other case, return “You failed!”
*/

function passingAverage(arg1, arg2, arg3, arg4) {
  result = (arg1 + arg2 + arg3 + arg4) / 4;
  if (result > 90) {
    return "You all passed with flying colors!";
  } else if (result <= 90 && result > 80) {
    return "You all passed, good job!";
  } else if (result <= 80 && result > 70) {
    return "You all passed";
  } else if (result <= 70 && result > 64) {
    return "You barely made it";
  } else {
    return "You failed!";
  }
}

console.log(passingAverage(10, 30, 20, 20));
