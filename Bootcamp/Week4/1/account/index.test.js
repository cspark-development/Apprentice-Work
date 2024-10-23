const Account = require("./index.js");

describe("Can create Account with correct values", () => {
  const acc = new Account("xyz", 10);

  it("has an account ID", () => {
    expect(acc.accountId).toEqual("xyz");
  });
  it("has a balance", () => {
    expect(acc.balance).toEqual(10);
  });
});

describe("Can deposit", () => {
  const acc = new Account("xyz", 10);

  it("accepts deposits in USD", () => {
    acc.deposit(2, "USD");
    expect(acc.balance).toEqual(12);
  });
  it("accepts deposits in GBP", () => {
    acc.deposit(5, "GBP");
    expect(acc.balance).toEqual(18);
  });
});

describe("Can get balance", () => {
  const acc = new Account("xyz", 18);

  it("displays balance in USD", () => {
    expect(acc.getBalance("USD").slice(0, 3)).toEqual("$18");
  });
  it("displays balance in GBP", () => {
    expect(acc.getBalance("GBP").slice(0, 3)).toEqual("£15");
  });
});
