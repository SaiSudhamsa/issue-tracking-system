import projectService from "./../services/projectPageService";
import ticketService from "./../services/ticketPageService";
import userProjectService from './../services/userProjectService';

let getProjects = async function(req,res){
    let userId = req.user.id;
    try{
        let rows = await projectService.getProjects(userId);
        for(let i = 0;i<rows.length;i++){
            rows[i].createdAt = rows[i].createdAt.toISOString().slice(0, 19).replace('T', ' ');
            rows[i].numberOfTickets = await ticketService.getUserProjectTicketCount(rows[i].projectId,userId);
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

let getProjectDetails = async function(req,res){
    let projectId = req.params.projectId;
    let userId = req.user.id;
    try{
        await userProjectService.checkUserProjectAccess(userId,projectId);
        let temp = await projectService.getProjectDetails(projectId);
        let data = {
            projectTickets : await ticketService.getUserProjectTickets(userId,projectId),
            projectId : projectId,
            projectTitle: temp[0].projectTitle,
            projectDescription: temp[0].projectDescription,
            createdAt: temp[0].createdAt.toISOString().slice(0, 19).replace('T', ' ')
        }
        res.send({success: true,"data": data});
    }catch(err){
        res.send({success: false,errors: err});
    }
}

module.exports = {
    addProject: addProject,
    getProjects: getProjects,
    getProjectDetails: getProjectDetails
}