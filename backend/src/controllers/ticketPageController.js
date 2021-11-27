import ticketService from "./../services/ticketPageService";

let getTickets = async function(req,res){
    let userId = req.user.id;
    try{
        let rows = await ticketService.getTickets(userId);
        for(let i = 0;i<rows.length;i++){
            rows[i].createdAt = rows[i].createdAt.toISOString().slice(0, 19).replace('T', ' ');
            rows[i].createdBy = req.user.fullname;
        }
        res.send({success: true,data: rows});
    }catch(err){
        res.send({success: false,errors: err});
    }
}

module.exports = {
    getTickets: getTickets
}