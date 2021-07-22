/**
 * Author: Deep Patel.
 * Created On: 2021-07-20
 * Controller for Testimonials Router.
 */

const express = require('express');
const testimonialController = require('../controllers/testimonialController');

const testimonialRouter = express.Router();
testimonialRouter.get('/', testimonialController.list);
testimonialRouter.post('/add', testimonialController.add);
testimonialRouter.delete('/:id', testimonialController.get);
testimonialRouter.put('/update/:id', testimonialController.update);
testimonialRouter.delete('/remove/:id', testimonialController.remove);

module.exports = testimonialRouter;
