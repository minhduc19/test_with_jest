const app = require("./index");
const TodoModel = require("./models/todo.model");

async function createTodo () {

	const id = await TodoModel.add({"title":"shopping","done":1});
	console.log(id);


}

//createTodo();



app.listen(3000, () => {
  console.log("Server is now running!");
});

app.get('/use', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  //next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
