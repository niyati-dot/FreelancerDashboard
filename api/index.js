/* Author: Team */

const express = require('express');
const router = express.Router();
const projectsRouter = require('./routes/projectsRoutes');
const timelogRouter = require('./routes/timelogRoutes');
const todoListRouter = require('./routes/TodoListRoutes');
const clientsRouter = require('./routes/clientsRoutes');

//Main API Endpoint
router.get('/', (req,res) => {
    return res.status(200).json({
        success: true,
        message: "This is an API Endpoint"
    });
});

//Models API Endpoint
router.use('/projects',projectsRouter);
router.use('/timelogs',timelogRouter);
router.use('/todoLists', todoListRouter);
router.use('/clients', clientsRouter);

//404 Error Handling
router.use(function(req, res, next) {
    res.status(404).json({
        success: false,
        message: "Page not found"
    });
});

module.exports = router;