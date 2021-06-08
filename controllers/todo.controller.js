//exports.createTodo = () => {}
const TodoModel = require("../models/todo.model");




exports.createTodo = (req,res,next) => {

	

	const createdModel = TodoModel.create(req.body);

	res.status(200).json({"title":"shopping","done":"true"});

}