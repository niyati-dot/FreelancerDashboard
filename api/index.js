const express = require('express');
const router = express.Router();
const testRouter = require('./routes/testRoutes');
const projectRouter = require('./routes/projectRoutes');
const testimonialRouter = require('./routes/testimonialRouter');

router.get('/', (req,res) => {
    res.status(200).json({
        success: true,
        message: "This is an API Endpoint"
    });
});


router.use('/projects',projectRouter);
router.use('/test',testRouter);
router.use('/testimonials',testimonialRouter);

router.use(function(req, res, next) {
    res.status(404).json({
        success: false,
        message: "Page not found"
    });
});

module.exports = router;