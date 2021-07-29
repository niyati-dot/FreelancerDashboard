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
async function checktags(data){
  
  return new Promise((resolve, reject) => {
    var newlist= []
    data.forEach(row =>{
      invoices.find({"tags.tagId":row._id},function(err,result){
        if(result.length == 0){
          newlist.push(row)
          
          
        }
    })
    console.log(newlist)
  })
  console.log(newlist)
  if(newlist.length !=0){
    resolve(newlist)
  }
  else{
    resolve (0)
  }
})
  //   invoices.find({"tags.tagId":data._id},function(err,result){
  //   if(result.length >0){
  //     resolve(1)
  //   }
  //   else{
  //     resolve(0)
  //   }
  //   })
  // });
  // let result = await promise;
  // console.log(result)
  // return result
}
//get list of all the tags based on task end end date
module.exports.getTags = async (req, res) => {
   
    _id = req.body.project
    edate = new Date(req.body.endDate)
    sdate = new Date(req.body.startAt)
    taglist =[]

    const tags = await timelogs.find({"endAt":{$gte:sdate,$lte:edate},"project":_id}).exec()
    if(tags){
      res.send(tags)
    }
  };

//Add generated invoice
module.exports.addInvoice = async (req, res) => {
  id = 0
  const addInvoice = new invoices()
  if(req.body && req.body.projects){
    req.body.projects.forEach(result =>{
      if(result._id == req.body.project){
        addInvoice.projectName = result.title,
        addInvoice.clientName =  result.client,
        addInvoice.projectId = result._id,
        id = result._id
      }
    })
    
  }
  startdate = new Date(req.body.startAt)
  enddate= new Date(req.body.endDate)
  console.log(id,startdate,enddate)
  const resule = await invoices.find({$and:[{"startDate":startdate},{"taskendDate":enddate},{"projectId":id}]}).exec()
  console.log(resule)
 
    
    if(resule.length ==0){
      console.log("generate")
      generateDate = new Date(req.body.generateDate)
        if(req.body && req.body.generateDate)
        {
          addInvoice.generatedDate =  generateDate;
        }
        if(req.body && req.body.startAt)
        {
          addInvoice.startDate =  req.body.startAt;
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
        
        
        console.log(req.body.invoiceDetails)
        req.body.invoiceDetails.forEach(result =>{
          datades = {}
          datades.tagId=result.id,
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
     }else{
      console.log("not generate")
      return res.status(400).json({
        result: [],
        message: "Invoice is alredy generated",
        success: false
      })
     }
  // })
  
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
  console.log(req.body.projectId)
  if(req.body && req.body.projectId){
    invoices.findOne({"_id":req.body.projectId}, function(err, result) {
      if (err) {
       
        return res.status(400).json({
            result: [],
            message: "Eroor",
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
  console.log(req.body)
  if(req.body && req.body.invoicenumber){
    invoices.findOneAndRemove({"_id":req.body.invoicenumber},function(error, result){
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
  console.log(req.body)
  invoices.find({"_id":req.body.invoiceNumber}, function(err, result) {
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
