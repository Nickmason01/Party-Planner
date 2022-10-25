const router = require('express').Router();
const partyRoutes = require('./partyRoutes');
const userRoutes = require('./userRoute');

router.use('/party', partyRoutes);
router.use('/user', userRoutes);

module.exports = router