/**
 * Author: Deep Patel.
 * Created On: 2021-07-20
 * Controller for Testimonials Controller.
 */

const testimonialModel = require('../models/testimonialModel');

//List all data
const list = (req, res) => {
    testimonialModel.find({}, function (err, docs) {
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
            data: docs
        })
    });
};

// Get data by id
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

//Update data by ID
const update = (req, res) => {
    testimonialModel.findById(req.params.id, function (err, testimonials) {
        if (err){
            return res.status(404).json({
                success: false,
                message: 'Project not found!'
            })
        }

        if(req.body && req.body.project){
            testimonials.project = req.body.project;
        }
        if(req.body && req.body.client){
            testimonials.client = req.body.client;
        }
        if(req.body && req.body.feedback){
            testimonials.feedback = req.body.feedback;
        }
        testimonials.save();
        return res.status(200).json({
            success: true,
            message: 'Project updated!',
        })
    });
};


//Remove data by ID
const remove = (req, res) => {
    testimonialModel.findOneAndRemove({_id: req.params.id},function (err, docs) {
        if (err){
            return res.status(404).json({
                success: false,
                message: err,
                data: null
            });
        }
        else{
            return res.status(200).json({
                success: true,
                message: 'Testimonial removed!'
            })
        }
    });
};

// Add data
const add = async (req, res) => {
    
    const testimonials = new testimonialModel();

    if(req.body && req.body.project){
        testimonials.project = req.body.project;
    }
    if(req.body && req.body.client){
        testimonials.client = req.body.client;
    }
    if(req.body && req.body.feedback){
        testimonials.feedback = req.body.feedback;
    }
    
    console.log(testimonials)
    testimonials.save(function(error, document) {
        if (error) {
            return res.status(400).json({

            })
        } else {
            return res.status(200).json({
                result: document,
                status: true
            })
        }
    });
};


module.exports = {
    list,
    get,
    add,
    update,
    remove
};
