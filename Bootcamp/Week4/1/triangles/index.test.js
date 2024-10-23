const Triangle = require("./index.js");

describe("A triangle", () => {
  const t = new Triangle(3, 8);
  it("has base", () => {
    expect(t.base).toEqual(3);
  });
  it("has height", () => {
    expect(t.height).toEqual(8);
  });
  it("has corners", () => {
    expect(t.corners).toEqual(3);
  });
});

describe("A triangle", () => {
  const t = new Triangle(3, 8);
  it("calculates area", () => {
    expect(t.area()).toEqual(12);
  });
});

describe("A triangle", () => {
  const t = new Triangle(3, 8);
  it("gets taller", () => {
    t.taller(2);
    expect(t.height).toEqual(10);
  });
});
