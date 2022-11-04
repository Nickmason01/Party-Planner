// checks session to against log in credentials.
const withAuth = (req, res, next) => {
    if(!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;