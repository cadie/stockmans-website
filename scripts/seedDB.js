const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Specials collection and inserts the specials below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/stockmans",
  {
    useMongoClient: true
  }
);

const specialsSeed = [
  {
    description: "15% OFF any purchase of $75 or more",
    restrictions: "See store for details. Some exclusions may apply.",
    expiration: "Expires October 29th, 2017."
  },
  {
    description: "$10 OFF any purchase of $90 or more",
    restrictions: "See store for details. Some exclusions may apply.",
    expiration: "Expires November 10th, 2017."
  },
  {
    description: "275% OFF all Ariat kids apparel",
    restrictions: "See store for details. Some exclusions may apply.",
    expiration: "Expires December 20th, 2017."
  }
];

const tackExchangeSeed = [
  {
    style: "All Purpose",
    description: "Kids Derby w/ suede inserts",
    seat: "15.0\"",
    tree: "MW",
    price: "$125.00",
    condition: "Like New"
  },
  {
    style: "All Purpose",
    description: "Kids Generic All-Purpose",
    seat: "15.0\"",
    tree: "MW",
    price: "$125.00",
    condition: "Like New"
  },
  {
    style: "All Purpose",
    description: "Collegiate Event",
    seat: "16.0\"",
    tree: "W",
    price: "$180.00",
    condition: "Fair"
  }
];

db.Special
  .remove({})
  .then(() => db.Special.collection.insertMany(specialsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.TackExchange
  .remove({})
  .then(() => db.TackExchange.collection.insertMany(tackExchangeSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
