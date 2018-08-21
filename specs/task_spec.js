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
})
