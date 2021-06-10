const request = require("supertest");
const app = require("../../index");
const newTodo = require("../../mock_data/todo.json");
const allTodo = require("../../mock_data/allTodo.json");

const endpointUrl = "/todos/";

describe(endpointUrl, () => {

	

  

	it("should throw error 400 when cannot find the item " + endpointUrl + " todoID", async () => {
		const response = await request(app).get(endpointUrl + "wrongID");
		expect(response.statusCode).toBe(404);
	})

	test("GET" + endpointUrl, async () => {
		const response = await request(app)
		.get(endpointUrl)

		expect(response.statusCode).toEqual(200);
		expect(Array.isArray(response.body)).toBeTruthy();
		expect(response.body[0].title).toBeDefined();
		expect(response.body[0].done).toBeDefined();
		firstTodo = response.body[1];
	});

	test("GET" + endpointUrl + ":todoId", async () => {
		const response = await request(app).get(endpointUrl + firstTodo.id);
		expect(response.statusCode).toBe(200);
		expect(response.body.title).toBe(firstTodo.title);
    	expect(response.body.done).toBe(firstTodo.done);
	})

	// it("should throw error 400 when cannot find the item " + endpointUrl + " todoID", async () => {
	// 	const response = await request(app).get(endpointUrl + "wrongID");
	// 	expect(response.statusCode).toBe(404);
	// })

    test("PUT" + endpointUrl + ":todoId", async () => {
		const response = await request(app)
								.put(endpointUrl + firstTodo.id)
								.send(firstTodo);
		expect(response.statusCode).toBe(200);
		//expect(response.body.title).toBe(firstTodo.title);
		//expect(response.body.done).toBe(firstTodo.done);
	})



  it("POST" + endpointUrl, async () => {
    const response = await request(app)
      .post(endpointUrl)
      .send(newTodo);
    expect(response.statusCode).toEqual(200);

    expect(response.body.title).toBe(newTodo.title);
    expect(response.body.done).toBe(newTodo.done);
  });

   it(
    "should return error 500 on malformed data with POST" + endpointUrl,
    async () => {
      const response = await request(app)
        .post(endpointUrl)
        .send({ title: "Missing done property" });
      expect(response.statusCode).toBe(500);
      expect(response.body).toStrictEqual({
        message: "something is missing in the request"
      });
    });

     test("DELETE" + endpointUrl + ":todoId", async () => {
		const response = await request(app)
								.delete(endpointUrl + firstTodo.id)
								
		expect(response.statusCode).toBe(200);
		//expect(response.body.title).toBe(newTodo.title);
		//expect(response.body.done).toBe(newTodo.done);
		})
  
});