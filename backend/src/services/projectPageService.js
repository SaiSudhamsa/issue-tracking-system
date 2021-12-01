import DBConnection from "./../configs/DBConnection";

let getProjects = async function(id){
    return new Promise(async (resolve,reject) => {

        DBConnection.query('select p.* from projects p,usersProjects u where p.projectId = u.projectId and u.userId = ?',id,
            function(err,rows){
                if(err){
                    reject(err)
                }else if(rows.length > 0){
                    resolve(rows);
                }else{
                    reject("No Projects Found!!!");
                }
            }
        )
    })
}

let addProject = async function(data){
    return new Promise(async (resolve,reject) => {
        DBConnection.query('insert into projects set ? ',data,
            function(err){
                if(err){
                    reject(err)
                }resolve("Project added successfully");
            }
        );
    });
}

let getProjectIds = async function(id){
    return new Promise(async function(resolve, reject){
        DBConnection.query('select projectId from usersProjects where userId = ?',id,
            function(err,rows){
                if(err){
                    reject(err);
                }else if(rows.length > 0){
                    resolve(rows);
                }else{
                    reject("No Projects Found!!!");
                }
            }
        )
    })
}

let getUserProjectsCount = async function(userId){
    return new Promise(async function(resolve, reject){
        DBConnection.query('select count(projectId) as count from usersProjects where userId = ?',[userId],
        function(err,rows){
            if(err){
                reject(err);
            }else{
                resolve(rows[0].count);
            }
        })
    })
}

let getProjectDetails = async function(projectId){
    return new Promise(async function(resolve,reject){
        DBConnection.query('select * from projects where projectId = ?',[projectId],
        function(err,rows){
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        })
    })
}

let getUsersOfProject = async function(projectId){
    return new Promise(async function(resolve,reject){
        DBConnection.query('select id,fullname,email from users where id in (select userId from usersProjects where projectId = ?)',projectId,
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
    addProject: addProject,
    getProjects: getProjects,
    getUserProjectsCount: getUserProjectsCount,
    getProjectDetails: getProjectDetails,
    getUsersOfProject: getUsersOfProject
}