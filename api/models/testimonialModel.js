const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;


const testimonialSchema = new Mongoose.Schema({
    id: {
        type: Schema.Types.ObjectID,
    },
    projectName: {
        type: String
    },
    status: {
        type: String
    },
    requestedOn: {
        type: Date,
        default: Date.now
    },
    feedback: {
        type: Date
    }
});

module.exports = Mongoose.model("Testimonial", testimonialSchema);
