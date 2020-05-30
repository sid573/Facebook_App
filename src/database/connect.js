var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://me-omics:mongo101@127.0.0.1:27017/facebook';

module.exports = {
    // To ping database to check connection
    databasePing: function (){
        MongoClient.connect(dbUrl, function(err, db) {
        if (err) {
            throw err;
        } else {
            database = db;
            console.log('MongoDB connection successful');
            }
        });
    },
    // Lists of object with collectionID to insert
    databaseSet: function (collectionID, value){
        MongoClient.connect(dbUrl, function(err, db) {   
        if (err) {
            throw err;
        } else {
            console.log(collectionID);
            const database = db.db("facebook");
            database.collection(collectionID).insertMany(value);
            console.log('MongoDB data inserted successful');
            }
        });
    }
}