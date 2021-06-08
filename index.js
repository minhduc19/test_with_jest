const express = require("express");
const app = express();
app.use(express.json());
const todoRoute = require('./routes/todo.routes');

app.use("/todos/",todoRoute);

//console.log(todoRoute);

app.post("/todo_test", (req,res) => {
	res.status(200).json("test");
})


app.get("/", (req, res) => {
  res.json("Hello world");
});

//app.listen(3000, () => {
//  console.log("Server is now running!");
//});

module.exports = app;
