import DBConnection from "./../configs/DBConnection";

let getTickets = async function(id){
    return new Promise(async function(resolve,reject){
        DBConnection.query("select * from tickets where createdBy = ? or assignedTo = ?",[id,id],
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

let getUserProjectTicketCount = async function(projectId, userId){
    return new Promise(async function(resolve,reject){
        DBConnection.query("select count(*) as count from tickets where projectId = ? and createdBy = ? or assignedTo = ?",[projectId,userId,userId],
            function(err,rows){
                if(err){
                    reject(err);
                }else {
                    resolve(rows[0].count);
                }
            }
        )
    })
}

let getUserTicketStatusCount = async function(userId,status){
    return new Promise(async function(resolve, reject){
        DBConnection.query("select count(*) as count from tickets where createdBy = ? or assignedTo = ? and status = ?",[userId,userId,status],
        function(err,rows){
            if(err){
                reject(err);
            }else{
                resolve(rows[0].count);
            }
        })
    })
}

module.exports = {
    getTickets: getTickets,
    getUserProjectTicketCount: getUserProjectTicketCount,
    getUserTicketStatusCount: getUserTicketStatusCount
}