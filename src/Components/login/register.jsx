import React from "react";
import loginImg from "./login.svg";
import axios from 'axios';
import "./style.scss";
import { Navigate } from 'react-router-dom';


export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePasswd = this.onChangePasswd.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
          fullName: "",
          email:"",
          password:""
        }
  }

  onChangeFullName(e){
    this.setState({fullName: e.target.value})
  }
  onChangeEmail(e){
    this.setState({ email: e.target.value })
  }
  onChangePasswd(e){
    this.setState({ password: e.target.value })
  }

  onSubmit(e){

    e.preventDefault()

    const userObject = {
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password
      };
    
    console.log(userObject);
    axios.post('http://localhost:8000/register', userObject, {withCredentials: true})
     .then((res) => {
        console.log(res.data)
        if(res.data.success){
          console.log("User succesfully registered")
        }
      }).catch((error) => {
          console.log(error)
        });

      this.setState({ fullName: '', email: '', password: '' })
      window.location.pathname = "/login";
  }

  render() {
    return (
      <div className="base-container">
        <div className="Greeting">
          <h1>Welcome to Issue Tracker</h1> 
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
              <div className="image">
                <img src={loginImg} />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="full name">Full Name</label>
                  <input type="text" value={this.state.fullName} onChange={this.onChangeFullName} name="full name" placeholder="full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" value={this.state.email} onChange={this.onChangeEmail} name="email" placeholder="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" value={this.state.password} onChange={this.onChangePasswd} name="password" placeholder="password" />
                </div>
              </div>
            </div>
          <div className="footer">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </div>
        </form>
      </div>
    );
  }
}
