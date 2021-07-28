/**
 * Author: Sanket Shah.
 * Created On: 2021-07-20
 * Controller for Projects.
 */

const mongoose = require('mongoose');
const express = require("express");
const Project = require("../models/getProject");

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
    list
};
