// ==============================================================================
// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
var app = express();


var PORT = process.env.PORT || 8080;



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
