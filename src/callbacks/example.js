module.exports = {
    select: function(cursor){
        cursor.toArray(function(err, items){
            if (err){
                throw err;
            } else {
                console.log(items);
            }
        })
    }
}