import DBConnection from "./../configs/DBConnection";

let getTickets = async function(id){
    return new Promise(async function(resolve,reject){
        DBConnection.query("select * from tickets where createdBy = ?",id,
            function(err,rows){
                if(err){
                    reject(err);
                }else if(rows.length > 0){
                    resolve(rows);
                }else{
                    reject("No tickets found!!!");
                }
            }
        );
    });
}

module.exports = {
    getTickets: getTickets
}