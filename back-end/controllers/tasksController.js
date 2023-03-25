const tasks = require('../models/tasks');

const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

const addTask = (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    dueDate: req.body.dueDate,
  };
  tasks.push(task);
  res.status(201).json(task);
};

const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: 'Task deleted' });
};

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
};
