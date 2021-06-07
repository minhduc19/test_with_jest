const mongoose = require("mongoose");
const httpMocks = require('node-mocks-http');
res = httpMocks.createResponse();

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  }
});

const TodoModel = mongoose.model("Todo", TodoSchema);

const testModel = () => {
	return res;
}

function add(a) {
	return a;
}


module.exports = {TodoModel,add,testModel}