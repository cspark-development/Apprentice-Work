/*
1. Create a `Warrior` class that extends a `Character` class:

| Character |
| --- |
| number health |
| number speed |
| number attackPower |
| --- |
| move() : String |

| Warrior |
| --- |
| String weapon |
| --- |
| useWeapon() : String |

`Character`
- Properties
    - The `health`, `speed`, and `attackPower` are provided to the constructor function.
- Methods
    - `move()` returns the string `The character moves at a speed of SPEED`.

`Warrior`
- Properties
    - The `health`, `speed`, and `attackPower` are set by the parent class.
    - The `weapon` property is set by the `Warrior` constructor.
- Methods
    - `useWeapon()` returns the string `The warrior attacks with a WEAPON`.

2. Run your code.
3. Test your code.
*/
class Character {
	constructor(health, speed, attackPower) {
		this.health = health;	
		this.speed = speed;	
		this.attackPower = attackPower;	
	}
	move() {
		return `The character moves at a speed of ${this.speed}`;
	}
}

// Write your code here
class Warrior extends Character {
	constructor(health, speed, attackPower, weapon) {
		super(health, speed, attackPower);
		this.weapon = weapon;
	}
	useWeapon() {
		return `The warrior attacks with a ${this.weapon}`;
	}
}

// DO NOT EDIT CODE BELOW
module.exports = {
  Character,
  Warrior,
};
