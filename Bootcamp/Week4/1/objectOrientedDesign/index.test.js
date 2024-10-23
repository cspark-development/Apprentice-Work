const { Duck } = require("./index.js");

test("Can create an instance of Duck", () => {
  const flipper = new Duck("Flipper", "brown", 2);
  expect(flipper instanceof Duck).toEqual(true);
});

test("Constructor sets the values of name, beakColor, and age", () => {
  const flipper = new Duck("Bobby", "yellow", 5);
  expect(flipper.name).toEqual("Bobby");
  expect(flipper.beakColor).toEqual("yellow");
  expect(flipper.age).toEqual(5);
});

test("Constructor sets the values of name, beakColor, and age", () => {
  const flipper = new Duck("Bobby", "yellow", 5);
  expect(flipper.quack()).toEqual(
    "Bobby the duck with the yellow beak says quack quack"
  );
});
