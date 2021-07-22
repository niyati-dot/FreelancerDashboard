const mongoose = require('mongoose');
const express = require("express");
const Project = require("../models/getProject");


module.exports.getAllProject = async(req, res) => {
    console.log("hello")
    await Project.find().exec().then((m) => (console.log(m)))
        .catch((err) => (console.log(err)));

};