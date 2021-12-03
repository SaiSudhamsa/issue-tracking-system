import React from 'react';
import {Navigate} from 'react-router-dom';
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import Overview from "./Components/Overview";
import ProjectList from "./Components/ProjectList";
import TicketList from "./Components/TicketList";
import UserManagement from "./Components/UserManagement";

function App({component}) {
    if (localStorage.getItem('userID') === null) {
        return <Navigate to='/login' />
    }

    const renderSwitch = param =>  {
        switch(param){
            case 'Overview':
                return <Overview />;
            case 'TicketList':
                return <TicketList />;
            case 'ProjectList':
                return <ProjectList />;
            case 'UserManagement':
                return <UserManagement />;
            default:
                return <Overview />;
        }
    }

    return (
        <div>
            <Sidebar name="John Doe"/>
            <Topbar />
            <div className="Content">
                {renderSwitch(component)}
            </div>
        </div>
    );
}
export default App;