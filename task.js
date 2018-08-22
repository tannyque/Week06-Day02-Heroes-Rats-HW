const Task = function (difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.isTaskCompleted = false;
}

Task.prototype.taskCompleted = function () {
  this.isTaskCompleted = true;
};

module.exports = Task;
