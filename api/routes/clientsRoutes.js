/** 
 * Author: Janvi Patel.
 * Created On: 2021-07-20.
 * Contains route information for clients.
 */
const express = require('express');
const clientsController = require('../controllers/clientsController');

const clientsRouter = express.Router();
clientsRouter.get('/', clientsController.list);


module.exports = clientsRouter;
const clientsRoutes = express.Router();
clientsRoutes.post('/add', clientsController.add);
clientsRoutes.post('/edit', clientsController.edit);
clientsRoutes.post('/viewOne', clientsController.viewOne);
clientsRoutes.get('/getAll', clientsController.getAll);
clientsRoutes.get('/', clientsController.list);
clientsRoutes.post('/delete', clientsController.delete);

module.exports = clientsRoutes;