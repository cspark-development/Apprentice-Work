/* This exercise’s only goal is to define our Rocket model. We’re not creating data or defining a new function.
You can use either init() or define(). Both will work. These directions are for using init().

NOTE: The database from the previous problem is now in the db directory and stored in a connection.js file.

    Open the Rocket.js file. We’ll be working in ./Rocket.js.
    Require db, DataTypes, and Model, in the already complete sequelize connection (from ./db/connection.js) at the top of the file.
    Create a Rocket class that extends the Model.
    Call Rocket.init() and pass it two objects as arguments.
    In the first object argument, initialize the table with 2 columns:
        name - a string
        difficultyLevel - a number
    In the second object:
        Define a key of sequelize and pass it the database connection
        Define a key of modelName and define the model as “Rocket”
    Don’t forget to export your new Rocket model.
    Run your code. This won’t do much, but you can use this to help debug!
    Test your code.

Note: These tests can take awhile to run. If you get “Execution timed out” simply run the test again!
*/

// WRITE YOUR CODE HERE

const { db, DataTypes, Model } = require("./db/connection.js");

/*
class Rocket extends Model {};

Rocket.init(
{
	name: DataTypes.STRING,
	difficultyLevel: DataTypes.INTEGER
},
{
	sequelize: db,
	modelName: "Rocket"
});
*/

const Rocket = db.define("Rocket", {
	name: DataTypes.STRING,
	difficultyLevel: DataTypes.INTEGER,
});

module.exports = Rocket;
