const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food')

let hero;

describe('Hero', function () {
  beforeEach(function () {
    hero = new Hero('Upul', 'Popcorn')
  });
  it('should have a name', function () {
    const actual = hero.name;
    assert.strictEqual(actual, 'Upul')
  });
  it('should have a number indicating its health', function () {
    const actual = hero.health;
    assert.strictEqual(actual, 20)
  });
  it('should have a favourite food', function () {
    const actual = hero.favouriteFood;
    assert.strictEqual(actual, 'Popcorn')
  });
  it('should be able to say its name', function () {
    const actual = "Hi! My name is Upul";
    assert.strictEqual(actual, hero.greet())
  });
  it('should have a collection of tasks', function () {
    const actual = hero.tasks;
    assert.deepStrictEqual(actual, [])
  });
  it('should replenish health', function () {
    const food = new Food('Popcorn', 10)
    hero.eatFood(food)
    const actual = hero.health;
    assert.strictEqual(actual, 35)
  })
})
