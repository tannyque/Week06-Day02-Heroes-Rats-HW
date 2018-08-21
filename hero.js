const Hero = function (name, favouriteFood) {
  this.name = name;
  this.health = 20
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.greet = function () {
  return 'Hi! My name is ' + this.name
};

module.exports = Hero;
