const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    _id: { type: Number, required: true },
    name: { type: 'String', required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
