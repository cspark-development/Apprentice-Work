/*
Directions: 

 

The tests here are checking how many times your console.log has run. Feel free to call delayedHello() to check your work, but delete this function call before running the tests.

 

We are going to practice writing setTimeout to see how the event loop works!

    Inside the delayedHello function, create a setTimeout that prints to the console "Hello after 2 seconds". This should print after 2 seconds (or 2000 milliseconds).
    Inside the delayedHello function, create a second setTimeout that prints to the console "Hello after 1 second". This should print after 1 second (or 1000 millisecond).
    Run your code.

    Test your code. If done correctly, the console should look like the text shown below.

    Function starting up...
    Function ending...
    Hello after 1 second
    Hello after 2 seconds
*/
function delayedHello() {
	console.log("Function starting up...");

	// Create setTimeout methods here
	setTimeout(function() {
		console.log("Hello after 2 seconds");
	}, 2000);
	setTimeout(function() {
		console.log("Hello after 1 second");
	}, 1000);

	console.log("Function ending...");
}

module.exports = {
  delayedHello,
};
