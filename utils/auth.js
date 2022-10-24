const withAuth = (req, res, next) => {
    if(!req.session.logg_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;