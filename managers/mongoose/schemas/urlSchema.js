const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  user: String,
  urlid: String,
  url: String,
});
module.exports = mongoose.model("url", urlSchema);
