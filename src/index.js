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
                    <Route path="/" element={<App />} />
                    <Route path="/projects" exact component = {<App />} />
                    <Route path="/tickets" exact component={<App />}/>
                    <Route path="/users" exact compnent={<App />} />
                </Routes>
            </div>
        </Router>
    )
}

ReactDom.render(<OpeningView />, document.getElementById('root'));
