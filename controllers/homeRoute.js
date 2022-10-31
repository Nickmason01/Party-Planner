const router = require("express").Router();
const { Party, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/community", async (req, res) => {
  const partyData = await Party.findAll({
    include: [{ model: User }],
  });
  const parties= partyData.map((party) => party.get({ plain: true }));
  res.render("community", {
    parties,
    loggedIn: req.session.loggedIn,
  });
});

router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Party }],
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      ...user,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/party/:id', async (req, res) => {
  try {
      const startParty = await Party.findByPk(req.params.id, {
          include: [{ model: User, }],
      });
      const partyData = startParty.get({ plain: true});
      res.render('event', {
          parties: partyData
      });
      // return res.json(startParty);
  } catch (err) {
      console.log(err);
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
