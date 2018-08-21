const assert = require('assert');
const Hero = require('../hero.js');

let hero;

describe('Hero', function () {
  beforeEach(function () {
    hero = new Hero('Upul', 20, 'Popcorn')
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
})
