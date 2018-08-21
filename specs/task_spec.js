const assert = require('assert');
const Task = require('../task.js');

let task;

describe('Task', function () {
  beforeEach(function () {
    task = new Task(5, 8, 500)
  });
  it('should have a difficulty', function () {
    const actual = task.difficulty;
    assert.strictEqual(actual, 5)
  });
  it('should have an urgency', function () {
    const actual = task.urgency;
    assert.strictEqual(actual, 8)
  });
  it('should have a reward', function () {
    const actual = task.reward;
    assert.strictEqual(actual, 500)
  });
})
