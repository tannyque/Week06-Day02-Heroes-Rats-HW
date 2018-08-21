const Hero = function (name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.greet = function () {
  return 'Hi! My name is ' + this.name
};

module.exports = Hero;
