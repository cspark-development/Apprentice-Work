// if the id's match, the user should have access
// there is a bug here but I can't find it :(
// can you help?

/* Original Code
const submittedUserId = "485912";

const storedUserId = 485912;

const hasAccess = storedUserId === submittedUserId;
*/

// Fixed Code
const submittedUserId = "485912";

const storedUserId = 485912;

const hasAccess = storedUserId == submittedUserId;
