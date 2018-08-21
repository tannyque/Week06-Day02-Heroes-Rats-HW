const assert = require('assert');
const Food = require('../food.js');

let food;

describe('Food', function () {
  beforeEach(function () {
    food = new Food('Popcorn', 5)
  });
  it('should have a name', function () {
    const actual = food.name;
    assert.strictEqual(actual, 'Popcorn')
  });
})
