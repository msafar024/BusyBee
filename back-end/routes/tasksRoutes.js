const express = require('express');
const tasksController = require('../controllers/tasksController');

const router = express.Router();

router.get('/', tasksController.getAllTasks);
router.post('/', tasksController.addTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;
