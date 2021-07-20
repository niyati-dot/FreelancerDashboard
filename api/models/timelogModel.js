const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const timelogSchema = new Mongoose.Schema({
    project: {
        type: Schema.Types.ObjectID,
        ref: "Project",
    },
    task: {
        type: String,
    },
    startAt: {
        type: Date,
        default: Date.now
    },
    endAt: {
        type: Date,
    },
});

module.exports = Mongoose.model("Timelog", timelogSchema);