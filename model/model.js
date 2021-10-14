const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  tags: {
    type: Array,
  },
  price: {
    type: String,
  },
  rating: {
    type: String,
  },
  url: {
    type: String,
  },
  desc: {
    desc: String,
  },
});

const Restaurant = mongoose.model("Restaurant", schema);

module.exports = Restaurant;
