/*
1. Create the class below:

| Account |
| --- |
| string accountId |
| number balance |
| --- |
| deposit(amount: number, currency: string): void |
| getBalance(currency: string): string |

*Use an exchange rate of £1 = $1.20 throughout this exercise.*

2. Properties
- `accountId` and `balance` are provided to the `constructor`.
- The value of `balance` is in USD ($) by default.
3. Methods
- `deposit(amount, currency)`: The currency can either be the string 'USD' or the string 'GBP'. If the currency is 'GBP' then the amount must be converted to USD before it is added to the `balance`.
- `getBalance(currency)`: Will convert the balance to the desired currency if needed. It returns a string of the balance prefixed by the currency symbol: `'£'` if `currency` is `'GBP'` and `'$'` for `'USD'`.
4. Run your code
5. Test your code.
*/
// Write your code here
class Account {
	constructor(accountId, balance) {
		this.accountId = accountId;
		this.balance = balance;
	}
	deposit(amount, currency) {
		switch(currency) {
			case "GBP":
				this.balance += amount * 1.2;
				break;
			case "USD":
				this.balance += amount;
				break;
			default:
				break;
		}
	}
	getBalance(currency) {
		switch(currency) {
			case "GBP":
				return "£" + this.balance / 1.2;
			case "USD":
				return "$" + this.balance;
			default:
				return "Invalid currency specified!";
		}
	}
}

const acc = new Account("xyz", 10);

// DO NOT EDIT CODE BELOW
module.exports = Account;
