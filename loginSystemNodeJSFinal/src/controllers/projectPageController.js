import projectService from "./../services/projectPageservice";

let getProjects = async function(req,res){
    let userId = req.user.id;
    try{
        let rows = await projectService.getProjects(userId);
        for(let i = 0;i<rows.length;i++){
            rows[i].createdAt = rows[i].createdAt.toISOString().slice(0, 19).replace('T', ' ')
        }
        res.send({"success": true,"data": rows});
    }catch(err){
        res.send({"success": false,"errors": err});
    }
}

let addProject = async function(req,res){
    let newProject = {
        projectTitle: req.body.title,
        projectDescription: req.body.description,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        createdBy: req.user.id
    }

    try {
        await projectService.addProject(newProject);
        res.send({"success": true});
    }catch(err){
        res.send({"success": true,
                "errors": err});
    }

}

module.exports = {
    addProject: addProject,
    getProjects: getProjects
}