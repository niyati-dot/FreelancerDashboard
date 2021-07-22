const clientsModel = require('../models/clientsModel');

const list = (req, res) => {
    clientsModel.find({}, function (err, docs) {
        if (err){
            return res.status(404).json({
                success: false,
                message: 'Clients not found!',
                data: null
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Clients found!',
            data: docs
        })
    });
};


module.exports = {
    list
};