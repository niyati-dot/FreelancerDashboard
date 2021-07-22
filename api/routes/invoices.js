/**
 * Author: Tejaswi Chaudhary.
 * Created On: 2021-06-07
 * Route information for invoice management, invoice generation and edit invoice.
 */
const express = require('express')
const router= express.Router();

const projectController = require("../controllers/invoiceContreller")

//Invoice Routes
router.get("/getproject",projectController.getAllProject)
router.post("/tags",projectController.getTags)
router.post("/save",projectController.addInvoice)
router.get("/fetchinvoices",projectController.getAllInvoices)
router.post("/deleteinvoice",projectController.deleteinvoice)
router.post("/findinvoice",projectController.findInvoice)
router.post("/updateinvoice",projectController.updateInvoice)

module.exports = router;