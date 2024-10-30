/*
Directions: Complete the following steps: 

  

In ./index.js, where comments say YOUR CODE HERE, use the appropriate Sequelize methods to assign the 4 variables values as indicated in the descriptions below.

DATA PROVIDED: The following has already been provided:

    The database connection is in the db directory and called connection.js
    The model definition is in the models directory and imported from ./models/Rocket.

To debug using console.log, you’ll need to uncomment the code on lines 7 and 35 in the template file. Make sure to comment these out before running your tests or they will not work

Helpful Reminders:

    Only write within the initialize function provided.
    Don’t edit anywhere except where the 4 comments indicate.
    Remember to use await since all these methods are asynchronous!
    These tests take awhile to run, and if you get “Execution timed out” just run the test again.

Sequelize method .create()

    Create a rocket from the seed data rocket (already required from ./rocket.json for you at top of the file).
    Set createdRocket equal to the return value.

Sequelize method .findAll()

    Select all the rockets.
    Set foundRockets equal to the return value.

Sequelize method .update()

    Update the above created rocket to have these values:
        name ‘High Flyer’
        difficultyLevel 5
    Set updatedRocket equal to the return value.

Sequelize method .destroy()

    Delete the above created rocket.
    Set deletedRocket equal to the return value.

Run and Test Your Code

    Run your code
    Test your code
*/
const Rocket = require("./models/index.js");
const { db } = require("./db/connection.js");
const rocket = require("./rocket.json");

async function initialize() {
	// Uncomment the line below to run any debugging
	// await db.sync({force: true});
	
	let createdRocket; // = YOUR CODE HERE
	// WRITE YOUR CODE HERE
	createdRocket = await Rocket.create(rocket);
	
	const firstRocketVersion = {
	  name: createdRocket && createdRocket.name,
	  difficultyLevel: createdRocket && createdRocket.difficultyLevel,
	};
	
	let foundRockets; // = YOUR CODE HERE
	// WRITE YOUR CODE HERE
	foundRockets = await Rocket.findAll();
	
	let updatedRocket; // = YOUR CODE HERE
	// WRITE YOUR CODE HERE
	updatedRocket = await createdRocket.update({
		name: "High Flyer",
		difficultyLevel: 5,
	})
	
	const firstUpdate = {
	  name: updatedRocket && updatedRocket.name,
	  difficultyLevel: updatedRocket && updatedRocket.difficultyLevel,
	};
	
	let deletedRocket; // = YOUR CODE HERE
	// WRITE YOUR CODE HERE 
	deletedRocket = await createdRocket.destroy();
	
	// DO NOT EDIT BELOW
	return {
	  createdRocket: firstRocketVersion,
	  foundRockets,
	  updatedRocket: firstUpdate,
	  deletedRocket,
	};
}
// Uncomment the line below to run any debugging
// initialize()

// DO NOT EDIT BELOW
module.exports = initialize;

