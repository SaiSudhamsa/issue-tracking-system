import ticketService from "./../services/ticketPageService";
import projectService from "./../services/projectPageService";

let getOverviewPageData = async (req, res) => {

    console.log(2);
    let userId = req.user.id;
    console.log(userId);
    try{
        let data = {}
        data.openTicketsCount = await ticketService.getUserTicketStatusCount(userId,"open");
        data.closedTicketsCount = await ticketService.getUserTicketStatusCount(userId,"closed");

        let highPriorityTickets = await ticketService.getUserPriorityTickets(userId,"high");

        if(typeof(highPriorityTickets) !== "string"){
            for(let i = 0;i<highPriorityTickets.length;i++){
                highPriorityTickets[i].createdAt = highPriorityTickets[i].createdAt.toISOString().slice(0, 19).replace('T', ' ');
            }data.highPriorityTickets = highPriorityTickets;
        }else{
            data.highPriorityTickets = highPriorityTickets;
        }

        data.projectCount = await projectService.getUserProjectsCount(userId);
        

        res.send({"success": true, "data": data});
    }catch(err){
        res.send({"success": false, "errors": err});
    }
  


};

module.exports = {
    getOverviewPageData: getOverviewPageData
};
