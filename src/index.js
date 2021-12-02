import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import Auth from "./Components/login/Authentication";

import NewUser from "./views/NewUser";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import AddTicket from "./Components/AddTicket";

function Overview() {
    return (
        <div>
            <div>
                <div> <Topbar /> </div>
                <div> <Sidebar /> </div>
                <div className="content">
                    <AddTicket />
                </div>
                
            </div>
        </div>
    )
}

ReactDom.render(<AddTicket />, document.getElementById('root'));
