import DBConnection from "./../configs/DBConnection";

let getAllUsers = async function(){
    return new Promise(async function(resolve , reject){
        DBConnection.query("select id,email,fullname from users where id <> 1",
        function(err,rows){
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        })
    })
}

let getUsersNotinProjects = async function(){
    return new Promise(async function(resolve, reject){
        DBConnection.query("Select id,email,fullname from users where id not in (select distinct(userId) from usersProjects)",
        function(err,rows){
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        })
    })
}

let getProjectsNotAssignedToUser = async function(userId){
    return new Promise(async function(resolve,reject){
        DBConnection.query("select * from projects p where p.projectId not in (select up.projectId from usersProjects up where up.userId = ?)",userId,
        function(err,rows){
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        })
    })
}

module.exports = {
    getAllUsers: getAllUsers,
    getUsersNotinProjects: getUsersNotinProjects,
    getProjectsNotAssignedToUser: getProjectsNotAssignedToUser
}