/*
In ./db/connection.js:

    Inside the const { Sequelize }, include DataTypes and Model as well.
    Inside the module.exports = { db } add the DataTypes and Model.
*/
const path = require("path");
const { Sequelize, DataTypes, Model } = require("sequelize");

const db = new Sequelize({
	dialect: "sqlite",
	storage: path.join(__dirname, "db.sqlite"),
});

module.exports = {
	db,
	DataTypes,
	Model,
};
