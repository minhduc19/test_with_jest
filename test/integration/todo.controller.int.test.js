const request = require("supertest");
const app = require("../../index");
const newTodo = require("../../mock_data/todo.json");

const endpointUrl = "/todos/";

describe(endpointUrl, () => {
  it("POST" + endpointUrl, async () => {
    const response = await request(app)
      .post(endpointUrl)
      .send(newTodo);
    expect(response.statusCode).toBe(200);
    //expect(response.body.title).toBe(newTodo.title);
    //expect(response.body.done).toBe(newTodo.done);
  });
});