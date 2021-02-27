const mongoose = require('mongoose');

const contestScheme = mongoose.Schema({
  title: String,
  start: Date,
  finish: Date,
  created: Date,
  thumbnail: String,
  reward: [],
  tags: [],
  sponsors: [],
  images: [],
  text: String

});

let Contest = mongoose.model('Contest', contestScheme);

module.exports = Contest;