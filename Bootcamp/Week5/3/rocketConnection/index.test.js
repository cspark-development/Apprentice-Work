#!/bin/node
// install dependencies

const { db } = require("./index.js");

test("connects to the database", async () => {
  try {
    await db.sync();
  } catch (err) {
    expect(err).toBeFalsy();
  }
});
