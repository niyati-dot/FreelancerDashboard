const timelogModel = require('../models/timelogModel');
const projectModel = require('../models/projectModel');

const seed = async (req, res) => {
    let project = await projectModel.findOne().exec();

    let timelogs = [
        {
            "project": project._id,
            "task": "Task 1",
        },
        {
            "project": project._id,
            "task": "Task 2",
        },
        {
            "project": project._id,
            "task": "Task 3",
        },
        {
            "project": project._id,
            "task": "Task 4",
        },
        {
            "project": project._id,
            "task": "Task 5",
        },
        {
            "project": project._id,
            "task": "Task 6",
        },
    ];

    timelogModel.insertMany(timelogs).then(function(){
        return res.status(200).json({
            success: true,
            message: 'Timelogs seeded'
        });
    }).catch(function(error){
        return res.status(500).json({
            success: true,
            message: error
        });
    });
};

const list = (req, res) => {
    timelogModel.find({}, function (err, docs) {
        if (err){
            return res.status(404).json({
                success: false,
                message: 'Timelogs not found!',
                data: null
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Timelogs found!',
            data: docs
        })
    });
};

const get = (req, res) => {
    timelogModel.findById(req.params.id, function (err, doc) {
        if (err){
            return res.status(404).json({
                success: false,
                message: 'Timelog not found!',
                data: null
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Timelog found!',
            data: doc
        })
    });
};

const update = (req, res) => {
    timelogModel.findById(req.params.id, function (err, doc) {
        if (err){
            return res.status(404).json({
                success: false,
                message: 'Timelog not found!'
            })
        }

        if(req.body && req.body.task){
            doc.task = req.body.task;
        }

        if(req.body && req.body.endAt){
            doc.endAt = req.body.endAt;
        }
        doc.save();
        return res.status(200).json({
            success: true,
            message: 'Timelog updated!',
        })
    });
};

const add = async (req, res) => {
    let project = null;

    if (req.body && req.body.projectId) {
        try {
            project = await projectModel.findById(req.body.projectId).exec();
        } catch (e) {
            return res.status(404).json({
                success: false,
                message: 'Project not found!',
                data: null
            })
        }
    } else {
        return res.status(400).json({
            success: false,
            message: 'projectId is required',
            data: null
        })
    }

    if(project != null){
        const timelog = new timelogModel();

        timelog.project = project;

        if(req.body && req.body.task){
            timelog.task = req.body.task;
        }
        if(req.body && req.body.startAt){
            timelog.startAt = req.body.startAt;
        }
        if(req.body && req.body.endAt){
            timelog.endAt = req.body.endAt;
        }
        timelog.save();

        return res.status(200).json({
            success: true,
            message: 'Timelog added!',
            data: timelogModel
        })
    }
};


const remove = (req, res) => {
    timelogModel.findOneAndRemove({_id: req.params.id},function (err, docs) {
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
                message: 'Timelog removed!',
                data: timelogModel
            })
        }
    });
};

module.exports = {
    seed,
    list,
    get,
    update,
    add,
    remove
};