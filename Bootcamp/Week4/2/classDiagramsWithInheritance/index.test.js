const { Character, Warrior } = require("./index.js");

describe("Warrier", () =>{
  test("creates instanceof Warrior and Character", () => {
    const zelda = new Warrior(100, 3, 12, "sword");
    expect(zelda instanceof Character).toEqual(true);
    expect(zelda instanceof Warrior).toEqual(true);
  });

  test("class correctly sets properties", () => {
    const zelda = new Warrior(100, 3, 12, "sword");
    expect(zelda.health).toEqual(100);
    expect(zelda.speed).toEqual(3);
    expect(zelda.attackPower).toEqual(12);
    expect(zelda.weapon).toEqual("sword");
  });

  test("has move method", () => {
    const zelda = new Warrior(100, 3, 12, "sword");
    expect(zelda.move()).toEqual("The character moves at a speed of 3");
  });

  test("has useWeapon method", () => {
    const zelda = new Warrior(100, 3, 12, "sword");
    expect(zelda.useWeapon()).toEqual("The warrior attacks with a sword");
  });
})
