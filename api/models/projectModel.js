const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const projectSchema = new Mongoose.Schema({
    name: {
        type: String,
    },
});

module.exports = Mongoose.model("Project", projectSchema);