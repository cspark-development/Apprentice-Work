const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/connection.js");

const Product = db.define("product", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.INTEGER,
});

module.exports = Product;
