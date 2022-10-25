const router = require('express').Router();
const {Party, User} = require('../models');

router.get('/', async (req,res) => {
const parties = await Party.findAll({
  include: [{model: User}]
})
const partyData = parties.map(party => party.get({plain: true}))
  res.render('homepage', {parties:partyData})
})

router.get('/login', (req, res) => {

  if(req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
  res.render('login');
  });

  module.exports = router;
