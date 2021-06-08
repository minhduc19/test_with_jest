const express = require("express");
const app = express();
app.use(express.json());
const todoRoute = require('./routes/todo.routes');
const TodoModel = require("./models/todo.model");


app.use("/todos/",todoRoute);

app.use("/todos/",(err,req,res,next) => {
	console.log(err);
	res.status(500).json({"message": "something is missing in the request"});
})




//console.log(TodoModel.db("todos"));

async function add(){
  await TodoModel.db("todos").insert({"title":"shopping","done":"true"});
}



//add().then(console.log("inserted"));



//app.listen(3000, () => {
//  console.log("Server is now running!");
//});

module.exports = app;
