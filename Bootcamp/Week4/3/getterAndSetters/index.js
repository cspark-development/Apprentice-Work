/*
Directions: A BankAccount class has been declared. BankAccount has a private field of balance.

    Create a method called getBalance. This should return the current value of balance.
    Create a method called setBalance(newBalance). This should update #balance to the value of newBalance.
    Run your code.
    Test your code.
*/
class BankAccount {
	#balance;
	constructor(initialBalance) {
		this.#balance = initialBalance;
	}
	// DEFINE GETTER AND SETTER METHODS HERE
	// Write your code here
	getBalance() {
		return this.#balance;
	}
	setBalance(newBalance) {
		this.#balance = newBalance;
	}
}

// DO NOT EDIT CODE BELOW
module.exports = {
  BankAccount,
};
