const express = require('express')
const router= express.Router();

const projects = require('../models/getProject')
const projectController = require("../controllers/projectController")

router.get("/getproject",projectController.getAllProject)

module.exports = router;