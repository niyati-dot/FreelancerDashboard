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

    notificationModel.find({'date': today}, function(error, result)
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