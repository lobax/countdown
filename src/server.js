var express = require('express'),
  path = require('path'),
  app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, '../dist')));

var server = app.listen(app.get('port'), function() {
  console.log('The server is running on port: ' + app.get('port'));
});
