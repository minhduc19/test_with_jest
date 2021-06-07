//exports.createTodo = () => {}
const TodoModel = require("../models/todo.model");




exports.createTodo =  (req,res,next) => {
	const createdModel = TodoModel.create(req.body);
	//const a = TodoModel.add(10);
	res.status(200).json(createdModel);
	//es.status
}