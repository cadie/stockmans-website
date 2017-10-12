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
