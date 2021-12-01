import ticketService from "./../services/ticketPageService";
import projectService from "./../services/projectPageService";

let getOverviewPageData = async (req, res) => {

    let userId = req.user.userId;
    try{
        let data = {}
        data.openTicketsCount = await ticketService.getUserTicketStatusCount(userId,"open");
        data.closedTicketsCount = await ticketService.getUserTicketStatusCount(userId,"closed");

        data.highPriorityTickets = await ticketService.getUserPriorityTickets(userId,"high");
        
        data.projectCount = await projectService.getUserProjectsCount(userId);
        

        res.send({"success": true, "data": data});
    }catch(err){
        res.send({"success": false, "errors": err});
    }
  


};

module.exports = {
    getOverviewPageData: getOverviewPageData
};
