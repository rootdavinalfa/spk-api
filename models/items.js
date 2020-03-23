const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const itemSchema = new Schema({
  name: {
    type: String,
  },
});

const Items = mongoose.model('items', itemSchema);

module.exports = Items;