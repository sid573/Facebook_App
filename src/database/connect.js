var MongoClient = require('mongodb').MongoClient;
var database = undefined;
var dbUrl = 'mongodb://me-omics:mongo101@127.0.0.1:27017/facebook';

module.exports = {
    databasePing: function (){
        MongoClient.connect(dbUrl, function(err, db) {
        if (err) {
            throw err;
        } else {
            database = db;
            console.log('MongoDB connection successful');
            }
        });
    }
}