const express = require("express");
const app = express();
const httpMocks = require('node-mocks-http');

const jest = require('jest-mock');

const TodoController = require("./controllers/todo.controller");
const TodoModel = require("./models/todo.model");
const newTodo = {"title":"shopping","done":"true"};

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.listen(3000, () => {
  console.log("Server is now running!");
});

req = httpMocks.createRequest();
res = httpMocks.createResponse();
next = null;

function test (req,res) {
	console.log(res);
}

//test(req,res);

TodoModel.create = jest.fn();
const mock = TodoModel.create.mockReturnValue(newTodo);
console.log(mock());
TodoController.createTodo(req,res,next);
console.log(TodoModel.add(14));
//res.body = "test";
console.log("test");
console.log(res._getJSONData());

//mock()
//console.log(jest.fn());