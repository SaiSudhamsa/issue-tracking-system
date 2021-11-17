import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            { /*<Route path="/auth" component={AuthPage} />*/}
            <Route path="/" exact component={Overview} />
            <div className="Outline">
                <Topbar />
                <Sidebar />
            </div>
        </Router>
    );
}