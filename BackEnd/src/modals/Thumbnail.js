const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  thumbnailTitle: {
    type: String,
    required: true,
    trim: true,
  },
  prompt: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  aspectRatio: {
    type: String,
    required: true,
    trim: true,
  },
  colourScheme: {
    type: String,
    required: true,
    trim: true,
  },
},{timestamps : true});

const Data = mongoose.model("Data", DataSchema)
module.exports = Data;
