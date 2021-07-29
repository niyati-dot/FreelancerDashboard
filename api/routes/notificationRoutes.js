/** 
 * Author: Janvi Patel.
 * Created On: 2021-07-20.
 * Contains route information for clients.
 */
 const express = require('express');
 const notificationController = require('../controllers/notificationController');
  
 const notificationRoutes = express.Router();

 notificationRoutes.get('/getAll', notificationController.getAll);

 module.exports = notificationRoutes;