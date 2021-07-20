const timelogModel = require('../models/testimonialModel');

const get = (req, res) => {
    testimonialModel.findById(req.params.id, function (err, doc) {
        if (err){
            return res.status(404).json({
                success: false,
                message: 'Testimonial not found!',
                data: null
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Testimonial found!',
            data: doc
        })
    });
};

module.exports = {
    get
};
