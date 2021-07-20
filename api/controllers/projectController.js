const projectModel = require('../models/projectModel');

const seed = (req, res) => {
    let projects = [
        {
            "name": "Project 1",
        },
        {
            "name": "Project 2",
        },
        {
            "name": "Project 3",
        },
        {
            "name": "Project 4",
        },
        {
            "name": "Project 5",
        },
        {
            "name": "Project 6",
        },
    ];

    projectModel.insertMany(projects).then(function(){
        return res.status(200).json({
            success: true,
            message: 'Project seeded'
        });
    }).catch(function(error){
        return res.status(500).json({
            success: true,
            message: error
        });
    });
};

module.exports = {
    seed
};
