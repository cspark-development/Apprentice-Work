#!/bin/node
const path = require("path");
// DO NOT EDIT CODE ABOVE

// Write your code here
const Sequelize = require("sequelize");
const db = new Sequelize({
	dialect: "sqlite",
	storage: path.join(__dirname, "db.sqlite")
});

// DO NOT EDIT CODE BELOW
module.exports = db;
