const router = require('express').Router();
const partyRoutes = require('./partyRoutes');
const userRoutes = require('./userRoute');
// api routes for user and party 
router.use('/party', partyRoutes);
router.use('/user', userRoutes);

module.exports = router