var connectdb = require('../database/connect')
var cbFuncMain = require('../callbacks/main')

module.exports = function(app){

        // URL : /getcategories/shop_id?user=<ps_id>
        app.post('/getcategories/:id', function (req, res) {
            let shop_id = req.params.id;
            let p_id = req.query.user;
            response = {
                Status: "Fetching your request",
                User: p_id
            }
            // my callback for this is retCategory
            connectdb.databaseGet("Category", {}, cbFuncMain.retCategory, p_id)
            res.end(JSON.stringify(response));
        })
}
