const mongoose = require("mongoose");




class testModel {
  create(test){
    return test
  }
}

const TodoModel = new testModel();

// const TodoSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   done: {
//     type: Boolean,
//     required: true
//   }
// });

// const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = {TodoModel}