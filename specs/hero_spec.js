const assert = require('assert');
const Hero = require('../hero.js');

let hero;

describe('Hero', function () {
  beforeEach(function () {
    hero = new Hero('Upul', 20, 'Popcorn', 'My name is Upul', 'Conquer')
  });
  it('should have a name', function () {
    const actual = hero.name;
    assert.strictEqual(actual, 'Upul')
  });
})
