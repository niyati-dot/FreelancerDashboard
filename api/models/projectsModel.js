/**
 * Author: Sanket Shah.
 * Created On: 2021-07-20
 * Model for Projects.
 */

const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

/**
 * Model Schema for Projects
 */
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
    userId: {
        type: String
    }
}

module.exports = Mongoose.model("projects", projectsSchema);