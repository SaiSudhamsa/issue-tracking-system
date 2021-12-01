import DBConnection from "./../configs/DBConnection";

let getUserTickets = async function(query,values){
    return new Promise(async function(resolve, reject){
        DBConnection.query(query,values,
        function(err,rows){
            if(err){
                reject(err);
            }else if(rows.length > 0){
                resolve(rows);
            }else{
                resolve("No Tickets Found!!!");
            }
        })
    })
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

let getUserPriorityTickets = async function(userId,priority){
    return new Promise(async function(resolve, reject){
        DBConnection.query("select * from tickets where createdBy = ? or assignedTo = ? and priority = ?",[userId,userId,priority],
        function(err,rows){
            if(err){
                reject(err);
            }else if(rows.length > 0){
                resolve(rows);
            }else{
                resolve("No tickets Found!!!");
            }
        })
    })
}

let getUserProjectTickets = async function(userId,projectId){
    return new Promise(async function(resolve, reject){
        DBConnection.query("select * from tickets where createdBy = ? or assignedTo = ? and projectId = ?",[userId,userId,projectId],
        function(err,rows){
            if(err){
                reject(err);
            }else if(rows.length > 0){
                resolve(rows);
            }else{
                resolve("No Tickets Found!!!");
            }
        })
    })
}



module.exports = {
    getUserTickets: getUserTickets,
    getUserProjectTicketCount: getUserProjectTicketCount,
    getUserTicketStatusCount: getUserTicketStatusCount,
    getUserPriorityTickets: getUserPriorityTickets,
    getUserProjectTickets: getUserProjectTickets,
}