import React, { useState } from 'react';
import axios from 'axios';
//import { navigate } from '@reach/router';
//import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../images/project_logo.jpg";

export default function NewUser() {

    const [name, setName] = useState('');
    //const user = localStorage.getItem('userName');

   /* useEffect(() =>{
        //Make sure a user is logged in if not then redirect to login
        if(localStorage.getItem("userID") === null){
            navigate('/login');
            return;
        } 
    })*/

    const createProject = () =>{

        axios.post(
            'http://localhost:8000/api/projects',
            { name, users: [localStorage.getItem('userID')] },
            { withCredentials: true }
        )
            .then(() => {
                //return navigate('/home');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div style={{textAlign:"center", margin:"48px"}}>
            <h1>Welcome to Issue Tracking System</h1>
            <p>Get started by creating your first project!</p>
            <img src={require("/images/project_logo.jpg")} alt="Team Work" width="300" height="300" />
            <input type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="enter a project name..."
                style={{display:"block", margin:"12px auto", padding:"4px" }}/>
            <button type="button"
                    onClick={ createProject }
                    className="btn btn-primary">
                        Create Project!
            </button>
        </div>
    )
}