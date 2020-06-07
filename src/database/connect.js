var MongoClient = require('mongodb').MongoClient;
var useDatabase = "facebook";
var dbUrl = 'mongodb://me-omics:mongo101@127.0.0.1:27017/'+useDatabase;

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
            const database = db.db(useDatabase);
            database.collection(collectionID).insertMany(value);
            console.log('MongoDB data inserted successful');
            }
        });
    },
    // Provide collectionID and filters to get data from database.
    // filter: {<field1>: <value>, ....}
    databaseGet: function(collectionID, filter, callbackFunction, identifier){
        MongoClient.connect(dbUrl, function(err, db){
            if (err){
                throw err;
            } else {
                console.log(collectionID);
                const database = db.db(useDatabase);
                const cursor = database.collection(collectionID).find(filter);
                callbackFunction(cursor,identifier);
            }
        })
    }
}