const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo.model");
const httpMocks = require('node-mocks-http');
const newTodo = require("../../mock_data/todo.json");
const allTodo = require("../../mock_data/allTodo.json");



TodoModel.find = jest.fn();
TodoModel.add = jest.fn();
TodoModel.findAll = jest.fn();

let req, res, next;

beforeEach(()=>{
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
  next = jest.fn();
	//req.body = newTodo;
});

describe("TodoController.getTodo", () => {
  it("should be a getTodo function", () => {
    expect(typeof TodoController.getTodo).toBe("function");
  })
})

describe("TodoController.getAllTodo", () => {
  it("should be a function", () => {
    expect(typeof TodoController.getAllTodo).toBe("function");
  })

  it("should call TodoModel.find function", async () => {
    await TodoController.getAllTodo(req,res,next);
    expect(TodoModel.findAll).toHaveBeenCalled();
  })

  it("should return code 200 and a list of all todos", async () => {
    TodoModel.findAll.mockReturnValue(allTodo);
    console.log(TodoModel.findAll("test"));
    //console.log("after todoModel")
    await TodoController.getAllTodo(req,res,next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(allTodo);
    //console.log(res._getJSONData());

  })

  it("should handle errors", async () => {
    const errorMessage = { message: "Cannot find the todo" };
    const rejectedPromise = Promise.reject(errorMessage);
    TodoModel.findAll.mockReturnValue(rejectedPromise);
    await TodoController.getAllTodo(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });

})

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




