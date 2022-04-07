const { Schema, model } = require('mongoose');

const listSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = new model('List', listSchema);