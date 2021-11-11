import React from 'react'
import "../index.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Topbar() {
    return (
        <div className="Topbar">
            <button className="signout">sign out</button>
            <div className="Notifications">
                <div id="title" >{"Notifications"}</div>{" "}
                <div id="icon"><NotificationsIcon /></div>
            </div>
            <h1 id="logo" align={"center"}>Issue Tracking System</h1>
        </div>
    )
}

export default Topbar
