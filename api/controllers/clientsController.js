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
    if(req.body && req.body.linkedInProfile)
    {
        addclient.LinkedInProfile = req.body.linkedInProfile;
    }
    if(req.body && req.body.businessDescription)
    {
        addclient.BusinessDescription = req.body.businessDescription;
    }
    if(req.body && req.body.meetingPlatform)
    {
        addclient.MeetingPlatform = req.body.meetingPlatform;
    }
    if(req.body && req.body.country)
    {
        addclient.Country = req.body.country;
    }
    if(req.body && req.body.region)
    {
        addclient.Region = req.body.region;
    }
    console.log(addclient);
    clientsModel.count({}, function(error, numOfDocs){
        if(error) return callback(error);
        const ClientId = numOfDocs + 1;
        addclient.ClientId = Number(ClientId);
        clientsModel.findOne({'ClientName': addclient.ClientName, 'ContactNo': addclient.ContactNo}, function(error, result)
        {
            console.log('result',result);
            if(!result){
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
            }
        });
    });
}

module.exports.edit = (req, res) => {
   
    clientsModel.find({'ClientName': req.body.clientName , 'ContactNo': req.body.contactNo}, function(error, document) {

            let doc = document[0]
            console.log('request',req);
            if(req.body && req.body.clientName)
            {
                doc.ClientName = req.body.clientName;
            }
            if(req.body && req.body.contactNo)
            {
                doc.ContactNo =  req.body.contactNo;
            }
            if(req.body && req.body.emailId)
            {
                doc.Email =  req.body.emailId;
            }
            if(req.body && req.body.street)
            {
                doc.Street = req.body.street;
            }
            if(req.body && req.body.postalCode)
            {
                doc.PostalCode = req.body.postalCode;
            }
            if(req.body && req.body.organizationName)
            {
                doc.Organization= req.body.organizationName;
            }
            if(req.body && req.body.websiteName)
            {
                doc.Website =  req.body.websiteName;
            }
            if(req.body && req.body.LinkedInProfile)
            {
                doc.LinkedInProfile = req.body.LinkedInProfile;
            }
            if(req.body && req.body.businessDescription)
            {
                doc.BusinessDescription = req.body.businessDescription;
            }
            if(req.body && req.body.meetingPlatform)
            {
                doc.MeetingPlatform = req.body.meetingPlatform;
            }
            if(req.body && req.body.country)
            {
                doc.Country = req.body.country;
            }
            if(req.body && req.body.region)
            {
                doc.Region = req.body.region;
            }

            doc.save(function(error,result){
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
    });
}

module.exports.viewOne = (req, response) => {


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

    if(req.body && req.body.ClientName && req.body.ContactNo){
        clientsModel.findOneAndRemove({'ClientName': req.body.ClientName, 'ContactNo': req.body.ContactNo}, function(error, result)
        {
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