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

async function updateTodo(req,res,next) {		
	try{
		const updatedTodo = await TodoModel.update(req.params.todoId,req.body);
		if(updatedTodo){
			return res.status(200).json(updatedTodo);
		} else {
			//return res.status(404).send("cannot find item");
			return res.status(200).json(updatedTodo);
		}
		
	}catch(err){
		next(err)
	}
}

async function findByIdAndDelete(req,res,next) {		
	try{
		const deletedTodo = await TodoModel.deleteTodo(req.params.todoId,req.body);
		if(deletedTodo){
			return res.status(200).json({"deleted todo has row":`${deletedTodo}`});
		} else {
			return res.status(404).send("cannot find item to delete");
		}
		
	}catch(err){
		next(err)
	}
}






module.exports = {createTodo,getTodo,getAllTodo,updateTodo,findByIdAndDelete}