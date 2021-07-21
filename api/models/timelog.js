const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const timelogSchema = new Mongoose.Schema({
    project: {
        type: Number
    },
    task: {
        type: String
    },
    startAt: {
        type: Date
    },
    endAt: {
        type: Date
    },
});


const timelogs = Mongoose.model('timelogs', timelogSchema);

module.exports = timelogs;
