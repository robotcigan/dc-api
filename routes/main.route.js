const router = require('express').Router();
const contestService = require('../services/contest.service');
const config = require('../configs/config');

// Index page
router.get(`${config.apiUrl}/`, (req, res, next) => {
  res.send('index page');
});

// Show all contests
router.get(`${config.apiUrl}/contests`, (req, res, next) => {
  contestService.findContests()
    .then(contests => {
      res.send(contests);
      // console.log(contests)
      console.log('enter')
    })
    .catch(err => next(err));
});


// Show one contest by id
router.get(`${config.apiUrl}/contest/:id`, (req, res, next) => {
  contestService.findContestById(req.params.id)
    .then(contest => {
      res.send({contest: contest});
    })
    .catch(err => next(err));
});


// Save post
router.post(`${config.apiUrl}/save-contest`, (req, res, next) => {
  let contest = req.body;
  contestService.createContest(contest)
    .then( () => res.send(contest) )
    .catch(err => next(err));
});


// Remove contest
router.delete(`${config.apiUrl}/remove-contest/:id`, (req, res, next) => {
  contestService.removeContest(req.params.id)
    .then(contest => {
      res.send({contest: contest});
      console.log('was deleted', contest)
    })
    .catch(err => console.log(err))
})


// Edit contest
router.put(`${config.apiUrl}/edit-contest/:id`, (req, res, next) => {
  contestService.editContest(req.params.id, req.body)
    .then(contest => {
      res.send({contest: contest});
      console.log('contest was updated', contest);
    })
    .catch(err => console.log(err));
});

module.exports = router;