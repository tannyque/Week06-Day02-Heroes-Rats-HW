const assert = require('assert');
const Food = require('../food.js');

let food;

describe('Food', function () {
  beforeEach(function () {
    food = new Food('Popcorn', 10)
  });
  it('should have a name', function () {
    const actual = food.name;
    assert.strictEqual(actual, 'Popcorn')
  });
  it('should have a replenishment value', function () {
    const actual = food.replenishment;
    assert.strictEqual(actual, 10)
  });
})
