const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const supplierSchema = new Schema({
  itemid :{
    type: String,
  },
  supplier: {
    type: String,
  },harga: {
    type: Number,
  },sni: {
    type: String,
  },beli: {
    type: String,
  },
});

const Suppliers = mongoose.model('supplier', supplierSchema);

module.exports = Suppliers;