const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
  imageUrl: { type: String },
  description: { type: String },
  category: { type: String },
  features: [String],
  pricePerDay: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema); 