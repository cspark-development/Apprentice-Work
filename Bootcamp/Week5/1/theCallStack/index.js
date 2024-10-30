/*
Currently myStack contains an empty array. We want the array to contain the following values:

["Zebras", "Lions", "Pandas", "Pandas", "Lions", "Zebras"]

    Using your knowledge of the call stack, call addPandas, addZebras, and addLions INSIDE the updateStack function to generate the desired output.
    Run your code.
    Test your code.
*/
const myStack = [];

function addPandas() {
	myStack.push("Pandas");
}

function addZebras() {
	myStack.push("Zebras");
}

function addLions() {
	myStack.push("Lions");
}

function updateStack() {
	// Add your code here
	addZebras();
	addLions();
	addPandas();
	addPandas();
	addLions();
	addZebras();
}

// DO NOT EDIT CODE BELOW
updateStack();
module.exports = {
  myStack,
};
