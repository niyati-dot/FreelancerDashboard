/**
 * Author: Tejaswi Chaudhary.
 * Created On: 2021-06-07
 * Controller for invoice management, invoice generation and edit invoice..
 */
const mongoose = require('mongoose');
const express = require("express");
const project = require("../models/projectsModel");
const timelogs = require("../models/timelogModel");
const invoices = require("../models/invoiceGenerate");


/**
 * Fetch data to generate based on task end date, delete or update invoices.
 * Date is received in the format: "YYYY-MM-DD"
 * @param {*} request 
 * @param {*} response 
 * @returns 
 */

//Get list of all the projects
module.exports.getAllProject = async(req, res) => {
    await project.find().exec().then((m) => (res.send(m)))
        .catch((err) => (console.log(err)));

};

//get list of all the tags based on task end end date
module.exports.getTags = (req, res) => {
   
    _id = req.body.project
    edate = new Date(req.body.endDate)

    timelogs.find().populate("project").where({"project":_id}).exec((err, result) => {
      if(err) {
        return (err)}
      else{
        res.send(result)
      }
      
    })
    

};

//Add generated invoice
module.exports.addInvoice = (req, res) => {
 
  generateDate = new Date(req.body.generateDate)

  const addInvoice = new invoices() 

    if(req.body && req.body.project)
    {
      addInvoice.projectName = req.body.project;
    }
    if(req.body && req.body.generateDate)
    {
      addInvoice.generatedDate =  generateDate;
    }
    if(req.body && req.body.dueDate)
    {
      addInvoice.dueDate =  req.body.dueDate;
    }
    if(req.body && req.body.endDate)
    {
      addInvoice.taskendDate = req.body.endDate;
    }
    if(req.body && req.body.hourlyRate)
    {
      addInvoice.hourlyRate = req.body.hourlyRate;
    }
    if(req.body && req.body.totalcost)
    {
      addInvoice.totalCost= req.body.totalcost;
    }
    if(req.body && req.body.paymentStatus)
    {
      addInvoice.paymentStatus =  req.body.paymentStatus;
    }
    addInvoice.clientName =  "Mohan";
    
    req.body.invoiceDetails.forEach(result =>{
      datades = {}
      datades.description=result.description,
      datades.hours =result.hours,
      datades.total =result.total
      addInvoice.tags.push(datades)
    
    })
    
    invoices.count({}, function(error, numOfInvoices){
      if(error) return callback(error);
      
      const invoiceId = numOfInvoices + 1;
      
      addInvoice.invId = Number(invoiceId);
      addInvoice.save(function(error, document){
        if (error) {
          console.log(error)
          return res.status(400).json({
              result: [],
              message: error,
              success: false
          })
        } else {
          console.log("Added")
          return res.status(200).json({
              result: addInvoice,
              success: true
          })
        } 

      })
    })
};

//fetch list of all the generated invoices
module.exports.getAllInvoices = async(req, res) => {
  invoices.find({}, function(error, result){
    if (error) {
      return res.status(400).json({
          result: [],
          message: error,
          success: false
      })
    } else {
      return res.send(result)
    }
    })

};

//find invoice based on given invoice id
module.exports.findInvoice = async(req, res) => {
  if(req.body && req.body.projectId){
    invoices.findOne({"invId":req.body.projectId}, function(err, result) {
      if (err) {
       
        return res.status(400).json({
            result: [],
            message: error,
            success: false
        })
      } else {
        return res.send(result)
      }
      })
  
}
};

//Delete invoice based on invoice id
module.exports.deleteinvoice = (req, res) => {
  
  if(req.body && req.body.invoicename){
    invoices.findOneAndRemove({"invId":req.body.invoicename},function(error, result){
      if (error) {
        return res.status(400).json({
            result: [],
            message: error,
            success: false
        })
    } 
    else {
        return res.status(200).json({
            message: "Success",
            success: true
        })  
    }

    })
  }
  
};
//update invoice based on invoice id
module.exports.updateInvoice = (req, res) => {
  
  invoices.find({"invId":req.body.invoiceNumber}, function(err, result) {
      if (err) {
        throw err;
      }else{
        let data = result[0]
        if(req.body && req.body.paymentstatus){
          data.paymentStatus = req.body.paymentstatus
        }
        
        if(req.body && req.body.dueDate){
          var dueDate = new Date(req.body.dueDate)
          data.dueDate = dueDate
        }
      
        data.save(function(error,result){
          if (error) {
              console.log("update error")
              return res.status(400).json({
                  result: [],
                  message: error,
                  success: false
              })
          } else {
                  return res.status(200).json({
                      success: true
                  })

          }
       })
        
      }
  })
};
