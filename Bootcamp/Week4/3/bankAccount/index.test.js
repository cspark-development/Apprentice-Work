const BankAccount = require("./index.js");

test("should create an instance", () => {
  const account = new BankAccount("Joe Bloggs");
  expect(account).toBeTruthy();
});

test("can get owner with getOwner", () => {
  const account = new BankAccount("Joe Bloggs");
  expect(account.getOwner()).toEqual("Joe Bloggs");
});

test("getBalance returns balance in form of £<pounds>.<pence>", () => {
  const account = new BankAccount("Joe Bloggs");
  expect(account.getBalance()).toEqual("£0.00");
});

test("deposit updates balance correctly", () => {
  const account = new BankAccount("Joe Bloggs");
  account.deposit(100);
  expect(account.getBalance()).toEqual("£100.00");
});

test("Can withdraw when balance is above 0.00", () => {
  const account = new BankAccount("Joe Bloggs");
  account.deposit(100);
  account.withdraw(50);
  expect(account.getBalance()).toEqual("£50.00");
});

test("Throws error when withdraw amount is greater than balance amount", () => {
  const account = new BankAccount("Joe Bloggs");
  account.deposit(100);
  expect(() => {
    account.withdraw(200);
  }).toThrow("Insufficient funds");
});
