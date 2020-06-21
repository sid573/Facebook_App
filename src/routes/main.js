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

        // URL : /timeslot/shop_id?user=<ps_id>
        app.post('/timeslot/:id', function (req, res){
            let shop_id = req.params.id;
            let p_id = req.query.user;
            var date = req.body;
            response = {
                Status: "Fetching your request",
                User: p_id
            }

            // callback: retTime
            connectdb.databaseGet("Time", {S_id: shop_id, Date: date} , cbFuncMain.retTime, p_id);
            res.end(JSON.stringify(response));
        })
        // URL : /getproducts/category_id?user=<ps_id>
        app.post('/getproducts/:id', function (req, res) {
            let c_id = req.params.id;
            let p_id = req.query.user;
            response = {
                Status: "Fetching your request",
                User: p_id
            }
            // my callback for this is retProduct
            connectdb.databaseGet("Product", {category_id: c_id }, cbFuncMain.retProduct, p_id)
            res.end(JSON.stringify(response));
        })

        // URL : /setTime/user=<ps_id>
        // app.post('/setTime',function (req, res)){
        //     let
        // }
}

