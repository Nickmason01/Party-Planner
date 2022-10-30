const express = require('express');
const session = require('express-session');
const exhdbars = require('express-handlebars');
// will need routes and helper require here
const path = require('path')
const routes = require('./controllers');
const sequelize = require('./config/connection');

const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


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
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', hdbars.engine);
app.set('view engine', 'handlebars');


// template engines for handlebars?? I think we need them but need to review

app.use(express.json());

app.use(express.urlencoded({ extended: true})); //maybe
// app.use(express.static(path.join(_direname, 'public'))); // not sure 


app.use(routes); // this will be for the routes

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
