import React from 'react'
import "../index.css";
import {SidebarData} from "./SidebarData";

function Sidebar() {
    return (
        <div className="Sidebar">
            <h3>{"  "} Welcome,</h3> <h2>{"  "} Sai Sudhamsa</h2> 
            <ul className="SidebarList">
                {SidebarData.map((val, key)=>{
                return(
                    <li key={key} 
                        className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={() => {window.location.pathname = val.link}}>
                        <div id="icon">{val.icon}</div>{" "}
                        <div id="title">{val.title}</div>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar;
