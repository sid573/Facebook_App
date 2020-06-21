var connectdb = require('../database/connect')
const https = require('https')

const request = require('request')

module.exports = {
    retCategory: function(cursor, ps_id){
        cursor.toArray(function(err, items){
            if (err){
                throw err;
            } else {
                console.log(items);
            }
        })
        console.log(ps_id)
        const options ={
            method: 'GET',
            url:'https://me-omics.herokuapp.com/myapp',
        }
        request(options)
        .then(function(response){
            console.log(response)
        })
        .catch(function(err){
            throw err;
        
        })
    },

    retProduct: function(cursor, ps_id){
        cursor.toArray(function(err, items){
            if (err){
                throw err;
            } else {
                console.log(items);
            }
        })
        console.log(ps_id)
    },

    retTime: function(cursor, ps_id){        
        cursor.toArray(function(err, items){
            if (err){
                throw err;
            } else {
                if(items.empty()){
                    var data = [];
                    data.push({S_id:shop_id, Date: date , 
                                    slot :
                                    {
                                        '09:00-09:15': 0,
                                        '09:15-09:30': 0,
                                        '09:30-09:45': 0,
                                    }
                                })
                    connectdb.DatabaseSet("Time",data)
                    var list = ['09:00-09:15','09:15-09:30','09:30-09:45']
                    console.log(list)
                }
                else {
                    var list =[];
                    var dict = items.slot
                    for(var key in dict) {
                        if(dict[key]<5) list.push(key)
                    }
                    console.log(list)
                }

            }
        })
    }
 }      

