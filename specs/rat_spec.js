const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food');

let rat;

describe('Rat', function () {
  beforeEach(function () {
    rat = new Rat('Remy')
  });
  it('should have a name', function () {
    const actual = rat.name;
    assert.strictEqual(actual, 'Remy')
  })
  it('should be able to poison food if touched', function () {
    let food = new Food("Pizza", 20);
    rat.touchFood(food);
    assert.strictEqual(food.isPoisonous, true);
  })
})
