/* Author: Vishal Sancheti */

const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const projectSchema = new Mongoose.Schema({
    client: {
        type: String,
    },
    name: {
        type: String,
    },
});

module.exports = Mongoose.model("Project", projectSchema);