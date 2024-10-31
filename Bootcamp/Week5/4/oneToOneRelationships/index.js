/*
An Order and Invoice model have been created for you as well as a seed.js file that will populate your database at the start your program.

 

Create your code in src/index.js.

    Every Invoice has one Order that it corresponds to. Define this association using hasOne() and belongsTo().
    The findInvoice function accepts an Order id as an argument and should return an Invoice that matches this id. Use findByPk to find the Order that matches the provided id.
    Use the getInvoice method created by your association to get the corresponding Invoice for the order you found in the last step.
    Return the Invoice value.
    Run your code.
    Test your code.
*/

const { Order, Invoice } = require("./models/index.js");
// DO NOT EDIT CODE ABOVE

// Define your association
// WRITE YOUR CODE HERE
Order.hasOne(Invoice);
Invoice.belongsTo(Order);

async function findInvoice(id) {
	// get the invoice
	// WRITE YOUR CODE HERE
	const orderInstance = await Order.findByPk(id);
	return await orderInstance.getInvoice();
}

// DO NOT EDIT CODE BELOW
module.exports = {
  findInvoice,
  Order,
  Invoice,
};
