import React from 'react';
import ReactDom from 'react-dom';
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import "./index.css";

function Overview(){
  return (
    <div className="Overview">
      <Topbar />
      <Sidebar />
    </div>
    );
}

ReactDom.render(<Overview/>, document.getElementById('root'));
