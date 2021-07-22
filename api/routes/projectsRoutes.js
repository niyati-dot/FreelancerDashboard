const express = require('express');
const projectsController = require('../controllers/projectsController');

const projectsRouter = express.Router();
//projectsRouter.post('/seed', projectsController.seed); //For Development
projectsRouter.get('/', projectsController.list);
projectsRouter.get('/:id', projectsController.get);
projectsRouter.put('/update/:id', projectsController.update);
projectsRouter.post('/add', projectsController.add);
projectsRouter.delete('/remove/:id', projectsController.remove);


module.exports = projectsRouter;