const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo.model");
const httpMocks = require('node-mocks-http');
const newTodo = require("../../mock_data/todo.json");

TodoModel.db("todos").insert = jest.fn();
TodoModel.add = jest.fn();

let req, res, next;

beforeEach(()=>{


	req = httpMocks.createRequest();

	res = httpMocks.createResponse();
  next = jest.fn();
	//req.body = newTodo;
});

describe("TodoController.createTodo", () => {

  beforeEach(() => {
    req.body = newTodo;
  });

  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.db.insert",   () => {
    TodoController.createTodo(req,res,next);
    expect(TodoModel.add).toBeCalledWith(newTodo);

  });

  it("should return 200 response", async () => {
  	await TodoController.createTodo(req,res,next);
  	expect(res.statusCode).toBe(200);
  	expect(res._isEndCalled()).toBeTruthy();
  })

  it("should return json body in response", async () => {
    TodoModel.add.mockReturnValue(newTodo);
    await TodoController.createTodo(req, res, next);
    expect(res._getJSONData().title).toStrictEqual(newTodo.title);
  });

  it("should handle errors", async () => {
    const errorMessage = { message: "Done property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    TodoModel.add.mockReturnValue(rejectedPromise);
    await TodoController.createTodo(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });

 

});




