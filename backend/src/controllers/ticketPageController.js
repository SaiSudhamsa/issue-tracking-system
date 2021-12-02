import ticketService from "./../services/ticketPageService";

let getUserTickets = async function(req,res){
    let userId = req.user.id;
    let query = req.query;
    let queryValues = [];
    let newQuery = "select * from tickets where assignedTo = ?";
    queryValues.push(userId);
    try{
        if(query.status && query.status !== "all"){
            newQuery += " and status = ?";
            queryValues.push(query.status);
        }if(query.priority && query.priority !== "all"){
            newQuery += " and priority = ?";
            queryValues.push(query.priority);
        }if(query.type && query.type !== "all"){
            newQuery += " and ticketType = ?";
            queryValues.push(query.type);
        }if(query.createdBy && query.createdBy !== null){
            newQuery += " and createdBy = ?";
            queryValues.push(query.createdBy);
        }
        newQuery += " order by createdAt";
        let data = await ticketService.getUserTickets(newQuery,queryValues);
        if(typeof(data) !== "string"){
            for(let i = 0;i<data.length;i++){
                data[i].createdAt = data[i].createdAt.toISOString().slice(0, 19).replace('T', ' ');
            }
        }res.send({success: true,"data": data});
    }catch(err){
        res.send({success: false,errors: err});
    }
}

module.exports = {
    getUserTickets: getUserTickets
}