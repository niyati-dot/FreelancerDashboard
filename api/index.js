const express = require('express');
const router = express.Router();
const projectRouter = require('./routes/projectRoutes');
const testimonialRouter = require('./routes/testimonialRoutes');
const clientsRouter = require('./routes/clientsRoutes');
const timelogRouter = require('./routes/timelogRoutes');

//Main API Endpoint
router.get('/', (req,res) => {
    return res.status(200).json({
        success: true,
        message: "This is an API Endpoint"
    });
});

//Models API Endpoint
router.use('/projects',projectRouter);
router.use('/clients',clientsRouter);
router.use('/timelogs',timelogRouter);
router.use('/testimonials',testimonialRouter);

//404 Error Handling
router.use(function(req, res, next) {
    res.status(404).json({
        success: false,
        message: "Page not found"
    });
});

module.exports = router;