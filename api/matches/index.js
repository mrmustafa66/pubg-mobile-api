const express = require('express')
  , router = express.Router();

const passport = require('passport');
const MatchesController = require('./controller');
  // POST /verication?token=[string]&email=[string]
router.get('/matches/listing/', passport.authenticate('jwt', { session: false }), MatchesController.getMatches);
router.post('/matches/verifypayment/:userId/:matchId', MatchesController.verifypayment);
router.post('/matches/deletePlayer/', passport.authenticate('jwt', { session: false }), MatchesController.deletePlayer);
router.post('/matches/entry/', passport.authenticate('jwt', { session: false }), MatchesController.createMatchEntry);

module.exports = router;
