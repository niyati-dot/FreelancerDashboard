const express = require('express');
const testimonialController = require('../controllers/testimonialController');

const testimonialRouter = express.Router();
testimonialRouter.get('/get', testimonialController.get);
// timelogRouter.post('/', timelogController.list);
// timelogRouter.delete('/:id', timelogController.get);
// timelogRouter.put('/update/:id', timelogController.update);
// timelogRouter.post('/add', timelogController.add);
// timelogRouter.delete('/remove/:id', timelogController.remove);


module.exports = testimonialRouter;
