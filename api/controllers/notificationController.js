/**
 * Author: Janvi Patel.
 * Created On: 2021-07-20
 * Controller for Notification Controller.
 */

 const notificationModel = require('../models/calendarModel');

 /**
  * Method to get all the details of the clients.
  * @param {*} request 
  * @param {*} response 
  * @returns 
  * find the all clients details and returns result as response
  */
 module.exports.getAll = (req, response) => {

     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
     today = yyyy + '-' + mm + '-' + dd;
     console.log(today);
     console.log('New data');

    notificationModel.find({'date': today, 'viewStatus':false}, function(error, result)
    {
         if (error) {
              return response.status(400).json({
                  result: [],
                  message: error,
                  success: false
              })
         } 
         else {
              console.log(result)
              response.send(result)

        }
    });
 }

 module.exports.setStatus = (req, response) => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    console.log(req.body);
    console.log('New data');
  
   notificationModel.find({'date': today, 'eventName': req.body.eventName, 'category': req.body.category }, function(error, document) {

    let update = document[0]
    update.viewStatus = true;
    
    update.save(function(error,result){
        if (error) {
            return response.status(400).json({
                result: [],
                message: error,
                success: false
            })
        } else {
            return response.status(200).json({
                success: true
            })
        }
        })
    })
}