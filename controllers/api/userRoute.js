const router = require("express").Router();
const { User } = require("../../models/User");
// user route is checking for the login id
router.post("/", async (req, res) => {
  const userData = await User.create(req.body);

  req.session.save(() => {
    req.session.user_id = UserData.id;
    req.session.logged_in = true;

    res.status(200), json(userData);
  });
});

router.post("/login", async (req, res) => {
  const User = await User.findOne({ where: { email: req.body.email } });

  if (!User) {
    res.status(400).json({ message: "Incorrect email or password!" });
    return;
  }

  const Password = await User.passwordCheck(req.body.password);

  if (!Password) {
    res.status(400).json({ message: "Incorrect email or password!" });
    return;
  }

  res.session.save(() => {
    req.session.user_id = UserData.id;
    req.session.logged_in = true;

    res.json({user: userData, message: 'Welcome!' });
  });
});


module.exports = router;