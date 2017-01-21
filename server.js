var express = require('express');

// Create the app
var app = express();
const PORT = process.env.PORT || 8000 ;

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('app is listening on port', PORT);
});
