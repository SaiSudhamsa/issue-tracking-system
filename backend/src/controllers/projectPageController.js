import projectService from "./../services/projectPageservice";
import ticketService from "./../services/ticketPageService";

let getProjects = async function(req,res){
    let userId = req.user.id;
    try{
        let rows = await projectService.getProjects(userId);
        for(let i = 0;i<rows.length;i++){
            rows[i].createdAt = rows[i].createdAt.toISOString().slice(0, 19).replace('T', ' ');
            rows[i].numberOfTickets = await ticketService.getTicketCount(rows[i].projectId,userId);
        }
        res.send({"success": true,"projects": rows});
    }catch(err){
        res.send({"success": false,"errors": err});
    }
}

let addProject = async function(req,res){
    let newProject = {
        projectTitle: req.body.title,
        projectDescription: req.body.description,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
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