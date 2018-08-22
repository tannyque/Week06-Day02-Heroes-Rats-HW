const Hero = function (name, favouriteFood) {
  this.name = name;
  this.health = 20
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.greet = function () {
  return 'Hi! My name is ' + this.name
};

Hero.prototype.eatFood = function (food) {
  if(food.isPoisonous){
    this.health -= food.replenishment;
  }
  else if(food.name === this.favouriteFood) {
    this.health += food.replenishment * 1.5;
  }
  else{
    this.health += food.replenishment;
  }
}

Hero.prototype.taskCount = function () {
  return this.tasks.length
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.sortTasks = function (property) {
  this.tasks.sort(function (a, b) {
    return a[property] - b[property];
  })
};

Hero.prototype.getCompleteTasks = function () {
  return this.tasks.filter(task => task.isTaskCompleted)
};

Hero.prototype.getIncompletedTasks = function () {
  return this.tasks.filter(task => !task.isTaskCompleted)
};

module.exports = Hero;
