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
    }
});

module.exports = mongoose.model("to_do_list", todoListSchema, "to_do_list");
