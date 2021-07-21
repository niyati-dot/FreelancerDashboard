const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const projectsSchema = {
    title: {
        type: String
    },
    client: {
        type: String
    },
    description: {
        type: String
    },
    rate: {
        type: Number
    },
    invoice: {
        type: String
    },
    status: {
        type: String
    },
}

module.exports = Mongoose.model("Projects", projectsSchema);