const mongoose = require ('mongoose')

const projectSchema = {
    name: {type:String, required:true}
}

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
