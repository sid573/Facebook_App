var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
   let newDate = new Date(Date.now());
   console.log(`${newDate.toDateString()} ${newDate.toTimeString()}` + " ::: " + req.path)
   next()
}

app.use(myLogger)

// Imports of all different kind of routes
require("./src/routes/example")(app)

// Creates a server
var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Application listening at http://%s:%s", host, port)
})

// We are going to use only post function 
// curl -XPOST localhost:8000 -d '{"User": "sid573", "Project": "M-Omics"}' 