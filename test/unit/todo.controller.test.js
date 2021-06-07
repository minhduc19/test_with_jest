const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo.model");
const httpMocks = require('node-mocks-http');
const newTodo = {"title":"shopping","done":"true"};

TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
  	let req, res, next;
  	req = httpMocks.createRequest();
  	res = httpMocks.createResponse();
  	req.body = newTodo;
  	TodoController.createTodo(req,res,next);
  	expect(TodoModel.create).toBeCalledWith(newTodo);
  })

});