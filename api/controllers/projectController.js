/* Author: Vishal Sancheti */

const projectModel = require('../models/projectModel');

//Seed dummy documents
const seed = (req, res) => {
    let projects = [
        {
            "name": "Project A",
            "client": "Marco Botton"
        },
        {
            "name": "Project B",
            "client": "Giacomo Guilizzoni"
        },
        {
            "name": "Project C",
            "client": "Giacomo Guilizzoni"
        },
        {
            "name": "Project D",
            "client": "Mariah Guilizzoni"
        },
        {
            "name": "Project E",
            "client": "Mariah Guilizzoni"
        },
        {
            "name": "Project F",
            "client": "Marco Botton"
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

//List all documents
const list = (req, res) => {
    projectModel.find({}, function (err, docs) {
        if (err){
            return res.status(404).json({
                success: false,
                message: 'Projects not found!',
                data: null
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Projects found!',
            data: docs
        })
    });
};

module.exports = {
    seed,
    list
};
