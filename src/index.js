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
                    <Route path="/" exact element={<App />} />
                    <Route path="/projects" exact element = {<App />} />
                    <Route path="/tickets" exact element={<App />}/>
                    <Route path="/users" exact element={<App />} />
                </Routes>
            </div>
        </Router>
    )
}

ReactDom.render(<OpeningView />, document.getElementById('root'));
