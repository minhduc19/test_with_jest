const mongoose = require("mongoose");


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

function add(a) {
	return a;
}


module.exports = {TodoModel,add}