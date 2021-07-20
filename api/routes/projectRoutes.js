const express = require('express');
const projectController = require('../controllers/projectController');

const projectRouter = express.Router();
projectRouter.post('/seed', projectController.seed); //For Development


module.exports = projectRouter;