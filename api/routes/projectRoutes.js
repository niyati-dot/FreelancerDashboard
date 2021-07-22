/**
 * Author: Deep Patel.
 * Created On: 2021-07-20
 * Controller for Projects Router.
 */

const express = require('express');
const projectController = require('../controllers/projectController');

const projectRouter = express.Router();
projectRouter.get('/', projectController.list);

module.exports = projectRouter;
