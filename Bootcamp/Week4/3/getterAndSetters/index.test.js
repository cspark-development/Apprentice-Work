const { BankAccount } = require("./index.js");

test("getBalance and setBalance are functions", () => {
  const account = new BankAccount(10000);
  expect(typeof account.getBalance).toEqual("function");
  expect(typeof account.setBalance).toEqual("function");
});

test("getBalance gets the value of balance", () => {
  const account = new BankAccount(10000);
  expect(account.getBalance()).toEqual(10000);
});

test("setBalance updates the value of balance", () => {
  const account = new BankAccount(10000);
  account.setBalance(20000);
  expect(account.getBalance()).toEqual(20000);
});
