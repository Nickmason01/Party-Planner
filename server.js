const express = require('express');
const session = require('express-session');
const exhdbars = require('express-handlebars');
// will need routes and helper require here
const routes = require('');
const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3301;

const hdbars = exhdbars.create({ helpers });
// custom helpers--- not sure yet if needed.

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// template engines for handlebars?? I think we need them but need to review

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //maybe
app.use(express.static(path.join(_direname, 'public'))); // not sure 

app.use(routes); // this will be for the routes

sequelize.stnc({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
