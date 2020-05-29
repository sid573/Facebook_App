module.exports = function(app){
    
        app.get('/', function (req, res) {
            res.send('Hello World');
        })

        app.post('/', function (req, res) {
            response = {
                    Message: "May we meet again!!!",
                    Project: "M-Omics"
            };
            res.end(JSON.stringify(response));
        })
}

