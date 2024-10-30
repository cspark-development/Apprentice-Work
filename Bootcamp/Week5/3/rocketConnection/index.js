/*
This exercise’s only goal is to connect to sequelize. We’re not creating data or defining a new function.

    Require in Sequelize, Model, and DataTypes from Sequelize at the top of ./index.js.
    Require path at the top of ./index.js.
    Create a constant called db.
    Build your connection by using the new Sequelize() constructor.
        Remember, the Sequelize constructor accepts an options object with a dialect and storage property.
    Run your code.
    Test your code.
*/
// Write your code here
// 1. require in Sequelize and path
const path = require("path");
const { Sequelize, Model, DataTypes } = require("sequelize");

// 2. initialize new Sequelize, passing the object with dialect and storage.
// dialect is sqlite
// storage is './db.sqlite';
const db = new Sequelize({
	dialect: "sqlite",
	storage: path.join(__dirname, "db.sqlite"),
});

// DO NOT EDIT CODE BELOW

module.exports = {
  db,
  Model,
  DataTypes,
};
