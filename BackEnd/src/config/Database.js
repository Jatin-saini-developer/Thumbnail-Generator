const mongoose = require("mongoose");

const connectDB = async () => {

  await mongoose.connect('mongodb+srv://jatinrsaini:djEF55TrowJLgqiQ@cluster0.1svxivg.mongodb.net/ThumbnailGenerator');
};

module.exports = connectDB;