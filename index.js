const express = require("express");
const app = express();
const httpMocks = require('node-mocks-http');
const todoRoute = require('./routes/todo.routes');

//app.use(express.json());
app.use("/todos",todoRoute);


app.get("/", (req, res) => {
  res.json("Hello world");
});

//app.listen(3000, () => {
//  console.log("Server is now running!");
//});

module.exports = app;
