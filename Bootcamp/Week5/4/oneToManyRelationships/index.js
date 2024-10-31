/*
An Order and Product model have been created for you as well as a seed.js file that will populate your database at the start of your program.

 

We now have a Payment model to associate with and an Order can have many products. Define this association and update values once the association is defined.

Create your code in src/index.js.

    Every Order can have many Payment instances, but every Payment is assigned to a single Order. Define this association using hasMany() and belongsTo().
    The findPayment method accepts an Order id as an argument and should:
        Find the Order that matches this id.
        Get all the Payment instances associated with this id.
        Return the Payment instances.
    The updatePayment method accepts an orderId and a paymentId. This function should:
        Find the Order that matches orderId.
        Add the Payment that has paymentId to the found order.
        Return the updated payment.
    Run your code.
    Test your code.
*/

const { Order, Payment } = require("./models/index");
// DO NOT EDIT CODE ABOVE

// Write associations here
Order.hasMany(Payment);
Payment.belongsTo(Order);

// WRITE YOUR CODE HERE

async function findPayment(id) {
	// Write queries here
	// WRITE YOUR CODE HERE
	const orderInstance = await Order.findByPk(id);
	return await orderInstance.getPayments();
}

async function updatePayment(orderId, paymentId) {
	// Write queries here

	// WRITE YOUR CODE HERE
	const orderInstance = await Order.findByPk(orderId);
	return await orderInstance.addPayment(paymentId);
}

// findPayment(1);
// updatePayment(3, 4);

// DO NOT EDIT CODE BELOW
module.exports = {
  findPayment,
  updatePayment,
  Order,
  Payment,
};
