var connectdb = require('../database/connect')
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
            body: {
                ps_id: ps_id,
            },
            json: true,
        }
        request(options, (err, res, body) => {
            if (err){
                console.log(err);
            }
            console.log(body)
        });

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
                if(items.length==0){
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
    },

    setTime: function(cursor, ps_id){
        cursor.toArray(function(err, items){
            if (err){
                throw err;
            } else{
                items.slot[s]++;
            }
        })
    },


 }      

