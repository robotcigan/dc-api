const router = require('express').Router();
const contestService = require('../services/contest.service');
const config = require('../configs/config');
const moment = require('moment');

// Index page
router.get(`${config.apiUrl}/`, (req, res, next) => {
  res.send('index page');
});

// Show all contests
router.get(`${config.apiUrl}/contests`, (req, res, next) => {
  contestService.findContests()
    .then(contests => {
      res.send(contests);
    })
    // .catch(err => next(err));
    .catch(err => console.log(err));
});


// Show one contest by id
router.get(`${config.apiUrl}/contest/:id`, (req, res, next) => {
  contestService.findContestById(req.params.id)
    .then(contest => {
      let formatedDateCreated = moment(contest.created).locale('ru').format('DD MMMM YYYY, h:mm');
      res.send({ contest: contest, formatedDateCreated: formatedDateCreated });
    })
    .catch(err => console.log(err))
});


// Save post
router.post(`${config.apiUrl}/save-contest`, (req, res, next) => {
  let contest = req.body;
  contest.created = moment();
  contestService.createContest(contest)
    .then( () => res.send(contest) )
    .catch(err => console.log(err));
});


// Remove contest
router.delete(`${config.apiUrl}/remove-contest/:id`, (req, res, next) => {
  contestService.removeContest(req.params.id)
    .then(contest => {
      res.send({contest: contest});
      console.log('was deleted', contest)
    })
    .catch(err => console.log(err))
});

// Remove multiple posts
router.post(`${config.apiUrl}/remove-contests`, (req, res, next) => {
  console.log(req.body)
  contestService.removeMultipleContests(req.body)
    .then(contests => res.send(contests))
    .catch(err => { console.log(err); res.send(err) });
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

// Index page
router.get(`${config.apiUrl}/contestdates`, (req, res, next) => {
  res.send('index page');
});

module.exports = router;