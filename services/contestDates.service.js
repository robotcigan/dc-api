const router = require('express').Router();
const config = require('../configs/config')
const Contest = require('../models/contest.model.js');
const moment = require('moment');

// console.log('Contest Dates file')
// console.log(Contest.find());
module.exports.contestDates = () => {
  console.log('Contest Dates file')
}