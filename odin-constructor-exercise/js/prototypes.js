// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Setting properties and methods from Hero to Warrior & Healer
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Methods for Hero, Warrior & Healer constructors
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

let hero1 = new Warrior("Digby", 1, "sword");
let hero2 = new Healer("Frank", 1, "vercure");

console.log("prototype of hero1: ", Object.getPrototypeOf(hero1));
console.log("prototype of hero2: ", Object.getPrototypeOf(hero2));

console.log("hero1: ", hero1, "hero2: ", hero2);
console.log(hero1.greet());
console.log(hero1.attack());

// simple example of prototyping without constructors
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
console.log("------------------------");
console.log("animal / rabbit example:");
console.log("rabbit eats: ", rabbit.eats); // true (**)
console.log("rabbit jumps: ", rabbit.jumps); // true

let animal2 = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit2 = {
  jumps: true,
  __proto__: animal2
};

// walk is taken from the prototype
rabbit2.walk(); // Animal walk

console.log("--------------------------");
console.log("items example:");

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen, bed.glasses);