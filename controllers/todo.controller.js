const TodoModel = require("../models/todo.model");



async function createTodo (req,res,next) {
	try{
		const createdTodo = await TodoModel.add(req.body);
	 	return res.status(200).json(createdTodo);
	} catch(err) {
		//next("test"); 
		next(err);
	}
	
	

}



module.exports = {createTodo}