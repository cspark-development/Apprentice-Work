/*
In ./db/connection.js:

    Inside the const { Sequelize }, include DataTypes and Model as well.
    Inside the module.exports = { db } add the DataTypes and Model.

In index.js:

    Require db, DataTypes, and Model from the already complete sequelize connection (from ./db/connection.js) at the top of the file.
    Create a Product class that extends the Model.
    Call Product.init() and pass it two objects as arguments:
    In the first object argument, initialize the table with 3 columns:
        name: a string
        description: a string
        price: an integer
    In the second object:
        Define a key of sequelize and pass it the database connection
        Define a key of modelName and define the model as "Product"
    Run your code. Again, there isn’t much to see yet, but you can use console.log to help debug if you are running into problems!
    Test your code.
*/

// WRITE YOUR CODE HERE
const { db, DataTypes, Model } = require("./db/connection.js");

class Product extends Model {}; 

Product.init(
{ 
	name: DataTypes.STRING,
	description: DataTypes.STRING,
	Price: DataTypes.INTEGER,
},
{
	sequelize: db,
	modelName: "Product",
});

// DO NOT EDIT CODE BELOW
module.exports = Product;
