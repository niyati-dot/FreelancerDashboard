const express = require('express')
const router= express.Router();

const projectController = require("../controllers/projectController")

//Invoice Routes
router.get("/getproject",projectController.getAllProject)
router.get("/tags/:id",projectController.getTags)

module.exports = router;