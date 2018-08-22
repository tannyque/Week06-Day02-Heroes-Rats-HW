const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food')
const Task = require('../task.js');

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
  it('should count the number of tasks', function () {
    const actual = hero.taskCount();
    assert.strictEqual(actual, 0)
  })
  it('should add a task', function () {
    const task = new Task(5, 8, 500)
    hero.addTask(task);
    const actual = hero.taskCount()
    assert.strictEqual(actual, 1)
  });
  xit('should be able to sort by difficulty', function () {
    const task1 = new Task(5, 8, 500)
    hero.addTask(task1)
    const task2 = new Task(8, 3, 2000)
    hero.addTask(task2)
    const task3 = new Task(6, 5, 1250)
    hero.addTask(task3)
    // const actual = hero.tasks.sortByDifficulty();
    assert.deepStrictEqual(hero.tasks, [task1, task3, task2])
  })
})
