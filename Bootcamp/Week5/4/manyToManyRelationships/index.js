/*
A Cart and Product model have been created for you as well as a seed.js file that will populate your database at the start of your program.

 

A Product can be in many Cart instances and a Cart can have many Product instances. Define this association and update values once the association is defined.

In models/index.js:

    A Product can be in many Cart instances and a Cart can have many Product instances. Define this association using belongsToMany().

In index.js:

    The addToCart method accepts a productId and cartId as an argument. Update the function to:
        Find the Product that matches this productId.
        Add the Cart with cartId to the found product.
        Return the updated Cart instance.
    The addToProduct method accepts a cartId and productId as an argument. Update the function to:
        Find the Cart that matches this cartId.
        Add the Product with productId to the found cart.
        Return the updated Product instance.
    Uncomment the init() function call to test out your code.
    Run your code.
    Test your code.
*/

const { Cart, Product } = require("./models/index");
const { db } = require("./db/connection");
const seed = require("./seed");
// DO NOT EDIT CODE ABOVE


async function addToCart(productId, cartId) {
	// Write queries here
	const productInstance = await Product.findByPk(productId);

	// WRITE YOUR CODE HERE
	return await productInstance.addCart(cartId);
}
async function addToProduct(cartId, productId) {
	// Write queries here
	const cartInstance = await Cart.findByPk(cartId);

	// WRITE YOUR CODE HERE
	return await cartInstance.addProduct(productId);
}

async function init() {
  try {
    await db.sync();
    await seed();
  } catch (err) {
    console.error(err);
  }
  await addToCart(1, 2);
  await addToProduct(3, 2);
}
// init()

// DO NOT EDIT CODE BELOW
module.exports = {
  addToCart,
  addToProduct,
  init,
  Cart,
  Product,
};
