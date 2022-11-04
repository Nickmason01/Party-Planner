const express = require('express');
const session = require('express-session');
const exhdbars = require('express-handlebars');
const path = require('path')
const routes = require('./controllers');
const sequelize = require('./config/connection');
// access to helper
const helpers = require('./utils/helpers');
// stores the user log in credentials
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
// delievers helpers to window
const hdbars = exhdbars.create({ helpers });
// the sess log in, checks cookies and expiration. 
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
// all express, handlebars for router
app.use(session(sess));

app.engine('handlebars', hdbars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
