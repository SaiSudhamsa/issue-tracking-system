import DBConnection from "./../configs/DBConnection";

let checkUserProjectAccess = async function(userId,projectId){
    return new Promise(async function(resolve, reject){
        DBConnection.query("select * from usersProjects where userId = ? and projectId = ?",[userId,projectId],
        function(err,rows){
            if(err){
                reject(err);
            }else if(rows.length === 1){
                resolve(1);
            }else{
                reject("Access Forbiden!!!");
            }
        })
    })
}

module.exports = {
    checkUserProjectAccess: checkUserProjectAccess
}