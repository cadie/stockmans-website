const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tackExchangeSchema = new Schema({
  style: { type: String, required: true },
  description: { type: String, required: true },
  seat: { type: String, required: true },
  tree: { type: String, required: true },
  price: { type: String, required: true },
  condition: { type: String, required: true }
});

const TackExchange = mongoose.model("TackExchange", tackExchangeSchema);

module.exports = TackExchange;
