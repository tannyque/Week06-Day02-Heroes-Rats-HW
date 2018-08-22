const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food');
const Task = require('../task.js');
const Rat = require('../rat');

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
  it('should be able to sort by difficulty', function () {
    const task1 = new Task(5, 8, 500)
    hero.addTask(task1)
    const task2 = new Task(8, 3, 2000)
    hero.addTask(task2)
    const task3 = new Task(6, 5, 1250)
    hero.addTask(task3)
    hero.sortTasks("difficulty");
    assert.deepStrictEqual(hero.tasks, [task1, task3, task2])
  })
  it('should be able to sort by urgency', function () {
    const task1 = new Task(5, 8, 500)
    hero.addTask(task1)
    const task2 = new Task(8, 3, 2000)
    hero.addTask(task2)
    const task3 = new Task(6, 5, 1250)
    hero.addTask(task3)
    hero.sortTasks("urgency");
    assert.deepStrictEqual(hero.tasks, [task2, task3, task1])
  })
  it('should be able to sort by reward', function () {
    const task1 = new Task(5, 8, 500)
    hero.addTask(task1)
    const task2 = new Task(8, 3, 2000)
    hero.addTask(task2)
    const task3 = new Task(6, 5, 1250)
    hero.addTask(task3)
    hero.sortTasks("reward");
    assert.deepStrictEqual(hero.tasks, [task1, task3, task2])
  })
  it('should be able to view completed tasks', function () {
    const task1 = new Task(5, 8, 500)
    hero.addTask(task1)
    const task2 = new Task(8, 3, 2000)
    hero.addTask(task2)
    const task3 = new Task(6, 5, 1250)
    hero.addTask(task3)
    task2.taskCompleted();
    const actual = hero.getCompleteTasks(true);
    assert.deepStrictEqual(actual, [task2]);
  })
  it('should be able to view incomplete tasks', function () {
    const task1 = new Task(5, 8, 500);
    hero.addTask(task1);;
    const task2 = new Task(8, 3, 2000)
    hero.addTask(task2);
    const task3 = new Task(6, 5, 1250);
    hero.addTask(task3);
    task1.taskCompleted();
  });
  it("health should go down if food is poisoned", function () {
    let food = new Food ("Cheese", 10);
    let rat = new Rat ("Remy");
    rat.touchFood(food);
    hero.eatFood(food);
    assert.strictEqual(hero.health, 10);
  });
});
