const mongoose = require('mongoose');
const Contest = require('../models/contest.model.js');

// find all contests
module.exports.findContests = () => {
  return Contest.find();
}

// find one contest
module.exports.findContestById = (id) => {
  return Contest.findById(id);
}