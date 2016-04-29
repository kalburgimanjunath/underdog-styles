var express = require('express');
var path = require('path');
var hbs = require('express-handlebars');
var loadSections = require('./lib/load-sections');

var app = express();

// Export a function which takes a callback that is
// invoked once we are done setting up our app.
// The callback  is passed an error object if something
// goes wrong, or the app object once we are done
// setting everything up.
module.exports = function(cb) {
  app.engine('hbs', hbs({
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    defaultLayout: 'main',
    extname: '.hbs'
  }));

  app.set('view engine', 'hbs');
  app.set('views', __dirname + '/views/');
  app.use('/dist', express.static(__dirname + '/../dist/'));

  // Source files if we're not in production.
  // DEV: Serving source files enables us to view sourcemaps.
  if (process.env.NODE_ENV !== 'production') {
    app.use('/scss', express.static(__dirname + '/../scss/'));
  }

  // Load the sections for the styleguide
  loadSections(path.join(__dirname, '../docs/**/*.md'), function(error, sections) {
    if (error) {
      // If there was an error, pass it along to the callback function
      return cb(error);
    }

    // Hook up our routes
    app.get('/', function(req, res) {
      // Pass along the sections to our template
      return res.render('index', { sections: sections });
    });

    // Pass our app object to the callback function
    cb(null, app);
  });
};
