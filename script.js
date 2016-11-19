var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

var app = express();

// Express
app.set('port', 40444);
app.use(express.static('public'));

// Handlebars
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



// Routes
app.route('/')
   // GET
   .get(function (req, res) {
      var context = {};
      res.render('home', context);
   })

// 404 Error
app.use(function(req, res) {
  res.type('plain/text');
  res.status('404');            
  res.render('404');
});

// 500 Error
app.use(function(err, req, res, next) {
   res.type('plain/text');
   res.status('500');
   res.render('500');
});

// Server
app.listen(app.get('port'), function() {
   console.log('Express started on http://localhost:' + app.get('port') + "; Press Ctrl-C to terminate");
});

