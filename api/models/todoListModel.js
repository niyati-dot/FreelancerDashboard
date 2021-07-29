/**
 * Author: Bansi Mehta.
 * Created On: 2021-07-20.
 * Model for todo list.
 */
const mongoose = require("mongoose");
const schema = mongoose.Schema;


const todoListSchema = new schema({
    id: {
        type: schema.Types.ObjectID
    },
    title: {
        type: String
    },
    status: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now()
    },
    userId:{
        type: schema.Types.ObjectID,
        ref: "users"
    },
});

// Model according to collection: "to_do_list"
module.exports = mongoose.model("to_do_list", todoListSchema, "to_do_list");
