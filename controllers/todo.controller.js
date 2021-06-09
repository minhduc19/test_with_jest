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

async function getTodo(req,res,next) {
	try{
		const foundTodo = await TodoModel.find(req.params.todoID);
		if (foundTodo){
			return res.status(200).json(foundTodo);
		} else {
			return res.status(404).send("cannot find the item");
		}
		
	}catch(err) {
		next(err)
	}
}

async function getAllTodo(req,res,next) {		
	try{
		const allTodos = await TodoModel.findAll();
		return res.status(200).json(allTodos);
	}catch(err){
		next(err)
	}
}



module.exports = {createTodo,getTodo,getAllTodo}