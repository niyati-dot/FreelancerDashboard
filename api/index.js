const express = require('express');
const router = express.Router();
const testRouter = require('./routes/testRoutes');
const projectsRouter = require('./routes/projectsRoutes');
const clientsRouter = require('./routes/clientsRoutes');

router.get('/', (req,res) => {
    res.status(200).json({
        success: true,
        message: "This is an API Endpoint"
    });
});

router.use('/test',testRouter);
router.use('/projects',projectsRouter);
router.use('/clients',clientsRouter);

router.use(function(req, res, next) {
    res.status(404).json({
        success: false,
        message: "Page not found"
    });
});

module.exports = router;