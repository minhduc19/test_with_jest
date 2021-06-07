const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo.model");
const httpMocks = require('node-mocks-http');
const newTodo = {"title":"shopping","done":"true"};

TodoModel.create = jest.fn();

let req, res, next;

beforeEach(()=>{
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	//req.body = newTodo;
});

describe("TodoController.createTodo", () => {

  beforeEach(() => {
    req.body = newTodo;
  });

  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
  	
  	TodoController.createTodo(req,res,next);
  	expect(TodoModel.create).toBeCalledWith(newTodo);
  })

  it("should return 200 response", () => {
  	TodoController.createTodo(req,res,next);
  	expect(res.statusCode).toBe(200);
  	expect(res._isEndCalled()).toBeTruthy();
  })

  it("should return json body in response", () => {
    TodoModel.create.mockReturnValue(newTodo);
    TodoController.createTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });

});




