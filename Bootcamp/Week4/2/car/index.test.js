#!/bin/node
const Car = require("./index.js");

test("should output boolean based on colour", () => {
  const blueCar = new Car("Ford", "blue");
  const redCar = new Car("Toyota", "red");
  expect(Car.compareColor(redCar, blueCar)).toBe(false);
  expect(Car.compareColor(blueCar, blueCar)).toBe(true);
});
