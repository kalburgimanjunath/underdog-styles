var express = require('express');
var pug = require('pug');

var app = express();
app.engine('pug', pug.__express);
app.set('views', __dirname + '/views/');
app.use('/dist', express.static(__dirname + '/../dist/'));

app.get('/', function (req, res) {
  return res.status(200).render('ui-kit.pug');
});

module.exports = app;
