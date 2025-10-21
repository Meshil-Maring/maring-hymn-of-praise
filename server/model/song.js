const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  id: { type: Number, require: true },
  title: { type: String, require: true },
  key: { type: String },
  verse: { type: Object, require: true },
  image: { type: String },
  chorus: { type: Boolean, require: true },
});

const Song = mongoose.model("Song", songSchema, "song");
module.exports = Song;
