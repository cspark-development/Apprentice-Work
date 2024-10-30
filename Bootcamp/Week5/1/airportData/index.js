/*
**GOAL**: We are going to use the `fsPromises` [readFile method](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options) 🔍, which is an asynchronous function that reads in a file from a file path that his passed in. We will also, of course, leverage our new knowledge of `async`/`await` 😉 

**In the project, we have provided**
- A text file, `airportsData.txt`. This contains the data we need.
- A `filePath` variable to be used in the function

1. Write an `async` function, `findAirportByName`. The function receives an IATA (International Air Transport Association) code string (LHR, LAX, DFW…) as an argument.
2. Uses `readFile` (imported above) to read the txt file from the `filePath` (globally defined above).
3. Calls `JSON.parse()` passing in the result of the above call. [Use the documentation for JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) 🔍.
4. Finds the matching airport by its `iata` property.
5. Returns the airport object.
6. Run your code.
7. Test your code.
*/
const { readFile } = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "airportsData.txt");
// DO NOT EDIT ABOVE

// YOUR CODE

// for debugging
findAirportByName("LHR");

// DO NOT EDIT BELOW
module.exports = findAirportByName;
