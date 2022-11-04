const router = require('express').Router();
// all routes for the controller folder.
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
