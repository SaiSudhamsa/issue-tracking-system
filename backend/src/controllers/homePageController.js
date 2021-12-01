import ticketService from "./../services/ticketPageService";

let getOverviewPageData = async (req, res) => {

    let userId = req.user.userId;
    try{
        let data = {}
        data.openTicketsCount = await ticketService.getUserTicketStatusCount(userId,"open");
        data.closedTicketsCount = await ticketService.getUserTicketStatusCount(userId,"closed");

        data.highPriorityTickets = await ticketService.getUserPriorityTickets(userId,"high");

        res.send({"success": true, "data": data});
    }catch(err){
        res.send({"success": false, "errors": err});
    }
  


};

module.exports = {
    getOverviewPageData: getOverviewPageData
};
