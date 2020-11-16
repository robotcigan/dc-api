const router = require('express').Router();
const contestService = require('../services/contest.service');
const config = require('../configs/config');

// index page
router.get(`${config.apiUrl}/`, (req, res, next) => {
  res.send('index page');
});

// show all contests
router.get(`${config.apiUrl}/contests`, (req, res, next) => {
  contestService.findContests()
    .then(contests => {
      res.send(contests);
      // console.log(contests)
    })
    .catch(err => next(err));
});


// show one contest by id
router.get(`${config.apiUrl}/contest/:id`, (req, res, next) => {
  contestService.findContestById(req.params.id)
    .then(contest => {
      res.send({contest: contest});
    })
    .catch(err => next(err));
});


module.exports = router;