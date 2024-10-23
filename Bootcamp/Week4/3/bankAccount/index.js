/*
1. Create the following class:

| BankAccount |
| --- |
| -String owner |
| -int balance |
| --- |
| +getOwner() : String |
| +getBalance() : String |
| +deposit(amount) : void |
| +withdraw(amount) : void |

- **Properties**
    - `owner` is provided to the constructor function.
    - `balance` always starts as 0.
    - Both are private properties.

- **Methods**
    - `getOwner()` is a getter that returns the value of the `owner` private property.
    - `getBalance()` is a getter that returns the current balance amount from the balance private property, interpolated into a String in the following structure: `"£<pounds>.<pence>"` e.g. `"£12.75"`.
    - `deposit(amount)` adds the amount to the current `balance` private property.
    - `withdraw(amount)` checks if there are sufficient funds in balance, if true then the amount is deducted from the current balance private property. If false it throws an `Error()` with a message value of `"Insufficient funds"`.

2. Run your code.

3. Test your code.
*/
class BankAccount {
	// Write your code here
	#owner;
	#balance;
	constructor(owner) {
		this.#owner = owner;
		this.#balance = 0;
	}
	getOwner() {
		return this.#owner;
	}
	getBalance() {
		return `£${this.#balance.toFixed(2)}`;
	}
	deposit(amount) {
		this.#balance += amount;
	}
	withdraw(amount) {
		if (this.#balance >= amount) {
			this.#balance -= amount;
		} else {
			throw new Error("Insufficient funds");
		}
	}
}

// DO NOT EDIT CODE BELOW
module.exports = BankAccount;
