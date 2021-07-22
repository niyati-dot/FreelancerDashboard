const express = require('express');
const clientsController = require('../controllers/clientsController');

const clientsRoutes = express.Router();
clientsRoutes.post('/add', clientsController.add);
clientsRoutes.post('/edit', clientsController.edit);
clientsRoutes.post('/viewOne', clientsController.viewOne);
clientsRoutes.get('/getAll', clientsController.getAll);
clientsRoutes.post('/delete', clientsController.delete);

module.exports = clientsRoutes;