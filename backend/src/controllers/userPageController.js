import userService from "./../services/userPageservice"

let getAllUsers = async function(req,res){
    try{
        let data = await userService.getAllUsers();
        res.send({success: true, "data": data});
    }catch(err){
        res.send({success: false, errors: err});
    }
}

let getUsersNotinProjects = async function(req,res){
    try{
        let data = await userService.getUsersNotinProjects();
        res.send({success: true, "data": data});
    }catch(err){
        res.send({success: false, errors: err});
    }
}

let getProjectsNotAssignedToUser = async function(req,res){
    let userId = req.params.userId;
    try{
        let data = await userService.getProjectsNotAssignedToUser(userId);
        res.send({success: true, "data": data});
    }catch(err){
        res.send({success: false,errors: err});
    }
}

module.exports = {
    getAllUsers: getAllUsers,
    getUsersNotinProjects: getUsersNotinProjects,
    getProjectsNotAssignedToUser: getProjectsNotAssignedToUser
}