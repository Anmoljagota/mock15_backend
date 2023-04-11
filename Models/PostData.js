const mongoose = require("mongoose");
const postDataSchema = mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  travelers: Number,
  budget: Number,
});

const PostdataModel = mongoose.model("postdata", postDataSchema);
module.exports = {
  PostdataModel,
};
