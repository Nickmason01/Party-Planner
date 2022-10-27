const router = require("express").Router();
const { Party, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  const parties = await Party.findAll({
    include: [{ model: User }],
  });
  const partyData = parties.map((party) => party.get({ plain: true }));
  res.render("homepage", {
    parties: partyData,
    loggedIn: req.session.loggedIn,
  });
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Party }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// router.get('/signup', )

module.exports = router;
