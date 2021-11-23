import React from 'react';
import ReactDom from 'react-dom';
//import Sidebar from "./Components/Sidebar";
//import Topbar from "./Components/Topbar";
import "./index.css";
import Auth from "./Components/login/Authentication";

/*function Overview(){
  return (
    <div className="Overview">
      <Topbar />
      <Sidebar />
    </div>
    );
}
*/
ReactDom.render(<Auth />, document.getElementById('root'));
