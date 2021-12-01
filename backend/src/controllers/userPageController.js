import userService from "./../services/userPageservice"

let getAllUsers = async function(req,res){
    try{
        let data = await userService.getAllUsers();
        res.send({success: true, "data": data});
    }catch(err){
        res.send({success: false, errors: err});
    }
}

module.exports = {
    getAllUsers: getAllUsers
}