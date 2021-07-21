const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const clientsSchema = new Mongoose.Schema({
   
    ClientId: {
        type: Number,
    },
    ClientName: {
        type: String,
    },
    ContactNo: {
        type: String,
    },
    Email: {
        type: String,
    },
    Street: {
        type: String,
    },
    PostalCode:{
        type: String,
    },

    Organization: {
        type: String,
    },
    Website: {
        type: String,
    },
    LinkedInProfile: {
        type: String,
    },
    BusinessDescription: {
        type: String,
    },
    MeetingPlatform: {
        type: String,
    },
});

module.exports = Mongoose.model("clients", clientsSchema);