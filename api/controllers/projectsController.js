const projectsModel = require('../models/projectsModel');

const list = (req, res) => {
    projectsModel.find({}, function (err, docs) {
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

const get = (req, res) => {
    console.log(req);
    projectsModel.findById(req.id, function (err, doc) {
        if (err){
            return res.status(404).json({
                success: false,
                message: 'Project not found!',
                data: null
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Project found!',
            data: doc
        })
    });
};

const update = (req, res) => {
    projectsModel.findById(req.params.id, function (err, projects) {
        if (err){
            return res.status(404).json({
                success: false,
                message: 'Project not found!'
            })
        }

        if(req.body && req.body.title){
            projects.title = req.body.title;
        }
        if(req.body && req.body.client){
            projects.client = req.body.client;
        }
        if(req.body && req.body.description){
            projects.description = req.body.description;
        }
        if(req.body && req.body.rate){
            projects.rate = req.body.rate;
        }
        if(req.body && req.body.invoice){
            projects.invoice = req.body.invoice;
        }
        if(req.body && req.body.status){
            projects.status = req.body.status;
        }
        projects.save();
        return res.status(200).json({
            success: true,
            message: 'Project updated!',
        })
    });
};

const add = async (req, res) => {
    
        const projects = new projectsModel();

        if(req.body && req.body.title){
            projects.title = req.body.title;
        }
        if(req.body && req.body.client){
            projects.client = req.body.client;
        }
        if(req.body && req.body.description){
            projects.description = req.body.description;
        }
        if(req.body && req.body.rate){
            projects.rate = req.body.rate;
        }
        if(req.body && req.body.invoice){
            projects.invoice = req.body.invoice;
        }
        if(req.body && req.body.status){
            projects.status = req.body.status;
        }
        projects.save();

        return res.status(200).json({
            success: true,
            message: 'Project added!',
            data: projectsModel
        })
};


const remove = (req, res) => {
    projectsModel.findOneAndRemove({_id: req.params.id},function (err, docs) {
        if (err){
            return res.status(404).json({
                success: true,
                message: err,
                data: null
            });
        }
        else{
            return res.status(200).json({
                success: true,
                message: 'Project removed!',
                data: projectsModel
            })
        }
    });
};

module.exports = {
    list,
    get,
    update,
    add,
    remove
};