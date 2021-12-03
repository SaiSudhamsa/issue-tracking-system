import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import Auth from "./Components/login/Authentication";
import App from "./App";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function OpeningView() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Auth />} />
                    <Route path="/" exact element={<App component="Overview"/>} />
                    <Route path="/projects" exact element = {<App component="ProjectList"/>} />
                    <Route path="/tickets" exact element={<App component="TicketList"/>}/>
                    <Route path="/users" exact element={<App component="UserManagement"/>} />
                    <Route path="/projects/:id" exact element = {<App component="ProjectTickets"/>} />
                    <Route path="/projects/:id/members" element = {<App component="ProjectList"/>} />
                    <Route path="/projects/createProject" exact element = {<App component="CreateProject"/>} />
                    <Route path="/tickets" exact element={<App component="TicketList"/>}/>
                    <Route path="/profile" exact element={<App component="Profile"/>}/>
                </Routes>
            </div>
        </Router>
    )
}

ReactDom.render(<OpeningView />, document.getElementById('root'));
