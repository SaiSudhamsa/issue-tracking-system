import DBConnection from "./../configs/DBConnection";

let getProjects = async function(id){
    return new Promise(async (resolve,reject) => {
        DBConnection.query('select * from projects where createdBy = ?',id,
            function(err,rows){
                if(err){
                    reject(false)
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
                    reject(false)
                }resolve("Project added successfully");
            }
        );
    });
}

module.exports = {
    addProject: addProject,
    getProjects: getProjects
}