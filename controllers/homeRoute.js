const router = require('express').Router();
const {Party} = require('../models/Party');

router.get('/login', (req, res) => {

  if(req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
  res.render('login');
  });

  module.exports = router;
