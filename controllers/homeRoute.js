const router = require('express').Router();
const {Party, User} = require('../models');

router.get('/', async (req,res) => {
const parties = await Party.findAll({
  include: [{model: User}]
})
const partyData = parties.map(party => party.get({plain: true})); 
res.render('homepage', {parties:partyData, logged_in: req.session.logged_in})

})


router.get('/login', (req, res) => {

  if(req.session.logged_in) {
    res.redirect('/main');
    return;
  }
  res.render('login');
  });

  module.exports = router;
