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
  this.health += food.replenishment;
}

//   if(food === this.favouriteFood){
//     this.health += food.replenishment * 1.5;
//   }
//   else {
//     this.health += food.replenishment;
//   }
// };

module.exports = Hero;
