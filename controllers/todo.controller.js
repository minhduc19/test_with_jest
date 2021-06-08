const TodoModel = require("../models/todo.model");



async function createTodo (req,res,next) {

	//const createdModel = await TodoModel.db("todos").insert(req.body);
	const createdModel = TodoModel.add(req.body);
	res.status(200).json({"title":"shopping","done":"true"});
	

}



module.exports = {createTodo}