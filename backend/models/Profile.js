const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  culturalGroup: { type: String },
  campus: { type: String },
  department: { type: String },
  program: { type: String },
  srCode: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
