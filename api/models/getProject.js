const mongoose = require ('mongoose')

const projectSchema = {
    name: {type:String, required:true},
    project_id: {type:Number, required:true}

}

const projects = mongoose.model('projects', projectSchema);

module.exports = projects;
