const mongoose = require("mongoose");

const NewProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const NewProductModel = mongoose.model("skus", NewProductSchema);

module.exports = NewProductModel;
