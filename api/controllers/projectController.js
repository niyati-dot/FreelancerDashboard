const mongoose = require('mongoose');
const express = require("express");
const project = require("../models/getProject");
const timelogs = require("../models/timelog");

module.exports.getAllProject = async(req, res) => {
    console.log("hello")
    await project.find({},{"_id":0,"name":1,"id":1}).exec().then((m) => (res.send(m)))
        .catch((err) => (console.log(err)));

};

module.exports.getTags = async(req, res) => {
    let id;
    console.log(req.params.id)
    project.findOne({"name":req.params.id}, function(err, result) {
        if (err) throw err;
        console.log(result.project_id)
        if(result){
          timelogs.find({"project":result.project_id}).exec().then((m) => (res.send(m)))
        .catch((err) => (console.log(err)));
        }
      });  

};