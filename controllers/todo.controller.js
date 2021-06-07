//exports.createTodo = () => {}
const TodoModel = require("../models/todo.model");

module.exports = {
	createTodo
}

function createTodo(req,res,next) {
	TodoModel.create(req.body);
}