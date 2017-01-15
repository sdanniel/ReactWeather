var express = require('express');

// Create the app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('app is listening on port 3000');
});
