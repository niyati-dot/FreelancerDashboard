/**
 * Author: Sanket Shah.
 * Created On: 2021-07-26
 * Router for Projects.
 */

 const express = require('express');
 const calendarController = require('../controllers/calendarController');
 
 /**
  * APIs for CRUD operations
  */
 const calendarRouter = express.Router();
 calendarRouter.get('/', calendarController.list);
 calendarRouter.post('/add', calendarController.add);
 
 
 module.exports = calendarRouter;