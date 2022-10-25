const router = require('express').Router();
const {Party, User} = require('../../models');

router.get('/login', (req, res) => {
  
    res.render('login');
  });
