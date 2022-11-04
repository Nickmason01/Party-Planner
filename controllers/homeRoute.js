const router = require("express").Router();
const { Party, User } = require("../models");
const withAuth = require('../utils/auth');
// shows all parties of all users for the community page.
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
// gets parties of login user for their homepage.
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const partyData = await Party.findAll( {
      attributes: { exclude: ['password'] },
      include: [{ model: User }],
    });

    const parties = partyData.map(party => party.get({plain: true}));
    console.log(parties);
    res.render('homepage', {
      parties,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// gets all information associated with a users party ids to display all event information.
router.get('/party/:id', async (req, res) => {
  try {
      const startParty = await Party.findByPk(req.params.id, {
          include: [{ model: User, }],
      });
      const partyData = startParty.get({ plain: true});
      console.log(partyData);
      res.render('event', {
          party: partyData
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});
// directs access to logged in users.
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
// access with authorization for users profile
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const partyData = await Party.findAll( {
      where: {
        user_id: req.session.user_id
      },
      attributes: { exclude: ['password'] },
      include: [{ model: User }],
    });
    console.log(partyData);
    const parties = partyData.map(party => party.get({plain: true}));
    console.log("parties", parties);
    res.render('profile', {
      parties,
      loggedIn: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
