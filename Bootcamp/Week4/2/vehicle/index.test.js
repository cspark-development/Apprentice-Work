const { Car, Vehicle } = require("./index.js");

describe("Car and Vehicle relationship", () => {
  test("checks car inheritance", () => {
    const currentYear = new Date().getFullYear();
    const car = new Car("Ford", "Mustang", currentYear - 1, 4);
    expect(car.make).toBe("Ford");
    expect(car.model).toBe("Mustang");
    expect(car.year).toBe(currentYear - 1);
    expect(Car.getAge(car)).toBeLessThanOrEqual(1);
  });

  test("checks Car static method", () => {
    const car = new Car("Ford", "Mustang", 2022, 4);
    const bike = new Vehicle("Ducati", "2600", 2023);
    expect(Car.hasFourDoors(car)).toBe(true);
    expect(Car.hasFourDoors(bike)).toBe(false);
  });
})
