import React from 'react'
import "../index.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const onClick = () => {
    localStorage.removeItem("userID");
    window.location.pathname = "/login";
}

function Topbar() {
    return (
        <div className="Topbar">
            <button className="signout" onClick={onClick} >Logout</button>
            <div className="Notifications">
                <div id="title" >{"Notifications"}</div>{" "}
                <div id="icon"><NotificationsIcon /></div>
            </div>
            <h2 id="logo" align={"center"}>Issue Tracking System</h2>
        </div>
    )
}

export default Topbar;
