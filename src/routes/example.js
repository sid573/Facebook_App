var connectdb = require('../database/connect')
var cbFuncExample = require('../callbacks/example')

module.exports = function(app){
    
        app.get('/testing', function (req, res) {
            connectdb.databasePing();
            res.send('Hello World');
        })

        app.post('/insert', function (req, res) {
            var rec = req.body;
            var data = [];
            data.push(rec);
            connectdb.databaseSet("testing", data)
            response = {
                    Message: "May we meet again!!!",
                    Project: "M-Omics"
            };
            res.end(JSON.stringify(response));
        })

        app.get('/select', function(req, res) {
            connectdb.databaseGet("testing", {}, cbFuncExample.select);
            res.send("Check console");
        })
}

