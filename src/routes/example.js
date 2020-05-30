var connectdb = require('../database/connect')

module.exports = function(app){
    
        app.get('/', function (req, res) {
            connectdb.databasePing();
            res.send('Hello World');
        })

        app.post('/', function (req, res) {
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
}

