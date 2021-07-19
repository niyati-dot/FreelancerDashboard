const testModel = require('../models/testModel');

const list = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Test items',
        data: testModel
    })
};

module.exports = {
    list
};
