const express = require("express");
const todoController = require("../controllers/todo.controller");
const router = express.Router();

router.post("/", todoController.createTodo);
router.get("/", todoController.getAllTodo);
router.get("/:todoID", todoController.getTodo);

//router.post("/",(req,res) => {
//	res.status("200").send("hello");
//})
module.exports = router;