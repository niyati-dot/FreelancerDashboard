const express = require('express');

const router = express.Router();
const clientsModel = require('../models/clientsModel');

module.exports.add = (req, res) => {
    console.log(req.body);
    
    const addclient = new clientsModel();
    if(req.body && req.body.clientName)
    {
        addclient.ClientName = req.body.clientName;
    }
    if(req.body && req.body.contactNo)
    {
        addclient.ContactNo =  req.body.contactNo;
    }
    if(req.body && req.body.emailId)
    {
        addclient.Email =  req.body.emailId;
    }
    if(req.body && req.body.street)
    {
        addclient.Street = req.body.street;
    }
    if(req.body && req.body.postalCode)
    {
        addclient.PostalCode = req.body.postalCode;
    }
    if(req.body && req.body.organizationName)
    {
        addclient.Organization= req.body.organizationName;
    }
    if(req.body && req.body.websiteName)
    {
        addclient.Website =  req.body.websiteName;
    }
    if(req.body && req.body.LinkedInProfile)
    {
        addclient.LinkedInProfile = req.body.LinkedInProfile;
    }
    if(req.body && req.body.businessDescription)
    {
        addclient.BusinessDescription = req.body.businessDescription;
    }
    if(req.body && req.body.meetingPlatform)
    {
        addclient.MeetingPlatform = req.body.meetingPlatform;
    }

    console.log(addclient)
    
    clientsModel.count({}, function(error, numOfDocs){
        if(error) return callback(error);
        console.log(numOfDocs)
        const ClientId = numOfDocs + 1;
        console.log(ClientId)
        addclient.ClientId = Number(ClientId);
        addclient.save(function(error, document) {
            if (error) {
                return res.status(400).json({
                    result: [],
                    message: error,
                    success: false
                })
            } else {
                return res.status(200).json({
                    result: addclient,
                    success: true
                })
            }
        });
        console.log(addclient.ClientId);
    });

   
}

module.exports.edit = (req, res) => {
    console.log(req.body);
    
    const editclient = new clientsModel();

    if(req.body && req.body.clientName)
    {
        editclient.ClientName = req.body.clientName;
    }
    if(req.body && req.body.contactNo)
    {
        editclient.ContactNo =  req.body.contactNo;
    }
    if(req.body && req.body.emailId)
    {
        editclient.Email =  req.body.emailId;
    }
    if(req.body && req.body.street)
    {
        editclient.Street = req.body.street;
    }
    if(req.body && req.body.postalCode)
    {
        editclient.PostalCode = req.body.postalCode;
    }
    if(req.body && req.body.organizationName)
    {
        editclient.Organization= req.body.organizationName;
    }
    if(req.body && req.body.websiteName)
    {
        editclient.Website =  req.body.websiteName;
    }
    if(req.body && req.body.LinkedInProfile)
    {
        editclient.LinkedInProfile = req.body.LinkedInProfile;
    }
    if(req.body && req.body.businessDescription)
    {
        editclient.BusinessDescription = req.body.businessDescription;
    }
    if(req.body && req.body.meetingPlatform)
    {
        editclient.MeetingPlatform = req.body.meetingPlatform;
    }

    console.log(editclient)
    addclient.findOneAndUpdate(function(error, document) {
        if (error) {
            return res.status(400).json({
                result: [],
                message: error,
                success: false
            })
        } else {
            return res.status(200).json({
                result: addclient,
                success: true
            })
        }
    });
}

module.exports.viewOne = (req, response) => {

    console.log(req.body);

    if (req.body && req.body.ClientName && req.body.ContactNo) 
    {
        clientsModel.findOne({'ClientName': req.body.ClientName, 'ContactNo': req.body.ContactNo}, function(error, result)
        {
            response.send(result);
            // console.log(res)
            // if (error) {
            //     return response.status(400).json({
            //         result: [],
            //         message: error,
            //         success: false
            //     })
            // } 
            // else {
            //     return response.status(200).json({
            //         message: "Success",
            //         success: true
            //     })  
            // }
        });
    }
}

module.exports.getAll = (req, response) => {
    clientsModel.find({}, function(error, result)
    {
        console.log(result)
        if (error) {
             return response.status(400).json({
                 result: [],
                 message: error,
                 success: false
             })
        } 
        else {
             response.send(result)
             /*return response.status(200).json({
                 message: "Success",
                 success: true
             })*/  
       }
    });
}

module.exports.delete = (req, response) => {

    console.log("hello");
    console.log(req.body);
    if(req.body && req.body.ClientName && req.body.ContactNo){
        clientsModel.findOneAndRemove({'ClientName': req.body.ClientName, 'ContactNo': req.body.ContactNo}, function(error, result)
        {
            console.log(result)
            if (error) {
                return response.status(400).json({
                    result: [],
                    message: error,
                    success: false
                })
            } 
            else {
                return response.status(200).json({
                    message: "Success",
                    success: true
                })  
        }
        });
    }
}