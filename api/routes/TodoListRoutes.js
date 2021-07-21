const express = require('express')
const router = express.Router();
const todoListController = require("../controllers/TodoListController")

router.post("/getList", todoListController.getList)
router.post("/saveItem", todoListController.saveItem)
router.put("/markAsDone", todoListController.markAsDone)
router.delete("/deleteItem/:id", todoListController.deleteItem)

module.exports = router;
