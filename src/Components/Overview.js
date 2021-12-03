import React from "react";
import { AgChartsReact } from "ag-charts-react";
import axios from 'axios';
import { Container, Row, Col } from "reactstrap";


const Ticket = props => (
  <tr>
    <td>{props.ticket.title}</td>
    <td>{props.ticket.createdBy}</td>
    <td>{props.ticket.priority}</td>
    <td>{props.ticket.ticketType}</td>
    <td>{props.ticket.projectName}</td>
  </tr>
)

function PChart(props){
    const options = {
        data: [
            {
                label: "Open Tickets",
                value: 56.9
            },
            {
                label: "Closed Tickets",
                value: 22.5
            }
        ],
        series: [
            {
            type: "pie",
            angleKey: "value",
            labelKey: "label"
            }
        ]
    };

    return (
    <div>
        <AgChartsReact options={options} />
    </div>
  );
}

class Overview extends React.Component{
    constructor(props){
        super(props);
        this.state = { ticketlist: [],
                       ticketCount: 0,
                       closedTickets: 0,
                       openTickets: 0,
                       projectCount: 0 
                     };
    }

    componentDidMount() {
        axios.get('http://localhost:8000',{withCredentials: true})
            .then(response => {
                console.log(response.data);
                this.setState({ ticketlist: response.data.highPriorityTickets , 
                                ticketCount: response.data.openTicketsCount + response.data.closedTicketsCount, 
                                closedTickets: response.data.closedTicketsCount,
                                openTickets: response.data.openTicketsCount,
                                projectCount: response.data.projectCount
                                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    ticketsList() {
        if(this.state.ticketlist){
            return this.state.ticketlist.map((currentticket) => {
            return <Ticket ticket={currentticket} />;
        })
        }
        else{
            return;
        }
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs="2" lg="2">
                            <h3>You are working on {this.state.projectCount} projects and have {this.state.ticketCount} tickets assigned to you
                            </h3>
                        </Col>
                        <Col xs="2" lg="2">
                            <PChart openTickets={this.state.openTickets} closedTickets={this.state.closedTickets}/>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Priority Tasks</h3>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th>Title</th>
                                    <th>Created by</th>
                                    <th>Priority</th>
                                    <th>Type</th>
                                    <th>Project</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.ticketsList()}  
                            </tbody>
                        </table>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Overview;