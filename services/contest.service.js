// const mongoose = require('mongoose');
const Contest = require('../models/contest.model.js');
const moment = require('moment');

// Find all contests
module.exports.findContests = () => {
  return Contest.find();
}

// Find one contest
module.exports.findContestById = (id) => {
  return Contest.findById(id);
}

// Create contest
module.exports.createContest = (contest) => {
  return Contest.create(contest);
}

// Remove contest
module.exports.removeContest = (id) => {
  return Contest.findByIdAndRemove(id);
}

// Remove multiple contests
module.exports.removeMultipleContests = (removeMultiple) => {
  console.log('remove multiple contests', removeMultiple)
  return Contest.deleteMany({ _id: removeMultiple })
}

// Edit contest
module.exports.editContest = (id, contest) => {
  return Contest.findByIdAndUpdate(id, contest);
}


