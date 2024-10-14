/* badRating should be true if:
The userRating is less than 8 AND the userSpaceTime is greater than or equal to 1.
vip should be true if:
The userRating is equal to 10 OR the userSpaceTime is greater than 3.
sendEmail should be true if:
The userContact is true AND if userEmail is not null.
*/

let userRating = 7;
let userSpaceTime = 5;
let userContact = true;
let userEmail = null;
// DO NOT EDIT CODE ABOVE

// Write Your Code Here
const badRating = userRating < 8 && userSpaceTime >= 1;
const vip = userRating === 10 || userSpaceTime > 3;
const sendEmail = userContact === true && userEmail !== null;

console.log(badRating);
console.log(vip);
console.log(sendEmail);
