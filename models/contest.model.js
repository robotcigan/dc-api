const mongoose = require('mongoose');

const contestScheme = mongoose.Schema({
  name: String,
  tags: [],
  author: String,
  date: Date,
  images: []
});

let Contest = mongoose.model('Contest', contestScheme);

module.exports = Contest;