/*
To debug using console.log, you’ll need to uncomment the code on lines 5 and 33 in the template file. Make sure to comment these out before running your tests or they will not work.

The Product and connection files created in the last two exercises have been included here. Do all your work in index.js.

 

    Create a three new product instances (i.e. row) with the following values:
        Product 1
            "name": “Wireless Earbuds”
            "description": “True wireless earbuds with noise canceling technology”
            "price": 149.99
        Product 2
            "name": “Smartphone”
            "description": A high-quality smartphone with advanced features
            "price": 799.99
        Product 3
            "name": “Laptop”
            "description": A powerful laptop with high-end specifications
            "price": 1499.99
    A variable called allProducts has been initialized. Update this to contain all instances in the Product model.
    A variable called foundItem has been initialized. Update this to contain the item with an id of 2.
    Update foundItem to have a name of "iPhone" rather than the original value of "Smartphone".
    Finally, delete the foundItem instance. Save the result in the variable deletedProduct.
    Run your code.
    Test your code.
*/
const Product = require("./model/index.js");
const db = require("./db/connection.js");
const initialize = async () => {
	// Uncomment the line below to run any debugging, but make sure to comment it out before runnning the tests.
	// await db.sync({force: true});

	// Create products
	let allProducts;
	// Write your code here
	allProducts = {};
	allProducts[0] = await Product.create({
		name: "Wireless Earbuds",
		description: "True wireless earbuds with noise canceling technology",
		price: 149.99
	});
	allProducts[1] = await Product.create({
		name: "Smartphone",
		description: "A high-quality smartphone with advanced features",
		price: 799.99
	});
	allProducts[2] = await Product.create({
		name: "Laptop",
		description: "A powerful laptop with high-end specifications",
		price: 1499.99
	});

	// Find item with ID of 2
	let foundItem;
	// Write your code here
	foundItem = await Product.findByPk(2); 

	// Update item with ID of 2
	let updatedItem;
	// Write your code here
	updatedItem = await foundItem.update({
		name: "iPhone"
	});

	// Delete item with ID of 2
	let deletedProduct;
	// Write your code here
	deletedProduct = await foundItem.destroy();
	
	// DO NOT EDIT
	return {
		allProducts,
		updatedItem,
		deletedProduct,
	};
	// DO NOT EDIT  

};

// Uncomment the line below to run any debugging, but make sure to comment it out before you run the tests!
// initialize()

// DO NOT EDIT CODE BELOW
module.exports = { initialize };
