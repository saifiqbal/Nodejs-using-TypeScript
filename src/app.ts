const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts=require("express-ejs-layouts")




const githubController = require('./controllers/github');
const countriesController = require('./controllers/countries');
// import homeController = require('./controllers/home');
// import userController = require('./controtsllers/user');
// import apiController = require('./controllers/api');
// import contactController = require('./controllers/contact');



const app = express();





app.set('host', '127.0.0.1');
app.set('port',3000);
app.set('views', path.join(__dirname, '/../../src/views'));
app.set('view engine', 'ejs');


app.use(expressLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });
// app.use((req, res, next) => {
//   // After successful login, redirect back to the intended page
//   if (!req.user
//     && req.path !== '/login'
//     && req.path !== '/signup'
//     && !req.path.match(/^\/auth/)
//     && !req.path.match(/\./)) {
//     req.session.returnTo = req.originalUrl;
//   } else if (req.user
//     && (req.path === '/account' || req.path.match(/^\/api/))) {
//     req.session.returnTo = req.originalUrl;
//   }
//   next();
// });

/**
 * Start Express server.
 */


app.get('/api/github', githubController.getGithub);


app.get('/api/countries', countriesController.getCountries);


app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:3000');
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;

