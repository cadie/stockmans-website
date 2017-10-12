const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialSchema = new Schema({
  description: { type: String, required: true },
  restrictions: { type: String, required: true },
  expiration: String
});

const Special = mongoose.model("Special", specialSchema);

module.exports = Special;
