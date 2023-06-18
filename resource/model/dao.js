const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  internalCode: {
    type: String,
    required: true,
  },
  barcode: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
