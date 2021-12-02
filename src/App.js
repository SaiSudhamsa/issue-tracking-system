import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import Overview from "./Components/Overview";
import ProjectList from "./Components/ProjectList";
import TicketList from "./Components/TicketList";
import UserManagement from "./Components/UserManagement";

function App() {
    /*useEffect(() => {
        if (localStorage.getItem('userID') === null) {
            return <Navigate to='/login' />
        }
    })
    */
    if (localStorage.getItem('userID') === null) {
            return <Navigate to='/login' />
    }

    return (
        <p>This is App component</p>
    );
}
export default App;