/**
 * Author: Janvi Patel.
 * Created On: 2021-07-20.
 * Model for clients.
 */
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const notificationSchema = new Mongoose.Schema({
    eventName: {
        type: String
    },
    category: {
        type: String
    },
    date: {
        type: String
    },
    time:{
        type: String
    },
    viewStatus:{
        type: Boolean
    }
});

// Model according to collection: "calendar"
module.exports = Mongoose.model("calendars", notificationSchema);
