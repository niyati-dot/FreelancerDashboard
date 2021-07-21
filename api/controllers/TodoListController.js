const todoListModel = require('../models/TodoListModel');
const moment = require('moment')

module.exports.getList = (request, response) => {
    let data = request['body']
    // moment(data.currentDate, 'YYYY-MM-DD')
    let currentDate = new Date(data.currentDate)
    let condition = {'date': currentDate}
    console.log(condition)
    return todoListModel.find(condition, function (error, result) {
        if (error) {
            return response.status(400).json({
                result: [],
                message: error,
                success: false
            })
        } else {
            return response.status(200).json({
                result: result,
                success: true
            })    
        }
    })
}

module.exports.markAsDone = (request, response) => {
    let data = request['body']
    if (data && data.id) {

        todoListModel.find({'_id': data.id}, function(error, document) {
            console.log(document)
            let firstDocument = document[0]
            firstDocument.status = true;
            firstDocument.save(function(error, result) {
                if (error) {
                    return response.status(400).json({
                        result: [],
                        message: error,
                        success: false
                    })
                } else {
                    return response.status(200).json({
                        message: "Success",
                        success: true
                    })  
                }
            })
        });
    }

}

module.exports.deleteItem = (request, response) => {
    let data = request['params']
    if (data && data.id) {
        todoListModel.findOneAndRemove({'_id': data.id}, function (error, result) {
            if (error){
                return response.status(400).json({
                    result: [],
                    message: error,
                    success: false
                })
            }
            else{
                return response.status(200).json({
                    message: "Success",
                    success: true
                })  
            }
        });
    

    }
}

module.exports.saveItem = (request, response) => {
    let data = request['body']
    // todoListModel.title = data.title
    // todoListModel.status = false
    // todoListModel.date = data.date
    // console.log(todoListModel)
    var model = new todoListModel()
    model.title = data.title
    model.status = false
    model.date = data.date
    model.save(function (error, result) {
        console.log(result)
        if (error) {
            return response.status(400).json({
                result: [],
                message: error,
                success: false
            })
        } else {
            return response.status(200).json({
                resut: [],
                message: "Success",
                success: true
            })  
        }
    })
}