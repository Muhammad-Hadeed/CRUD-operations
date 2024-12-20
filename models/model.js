const mongoose = require('mongoose');

// Define the schema
const ItemSchema = new mongoose.Schema({
  Name: String,
  Type: String,
  Gen: Number,
  PokedexNum: Number
});

// Export the model
module.exports = mongoose.model('Item', ItemSchema);
