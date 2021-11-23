import React from "react";
import loginImg from "./login.svg";
import axios from 'axios';
import "./style.scss";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePasswd = this.onChangePasswd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
            email:"",
            password:""
        }
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
        email: this.state.email,
        password: this.state.password
      };

    console.log(userObject);

    axios.post('http://localhost:8000/login', userObject)
     .then((res) => {
        console.log(res.data)
        if(res.userexists){
          console.log("Login Successful")
        }
      }).catch((error) => {
          console.log(error)
        });

      this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div>
        <div className="greeting">
          <h1>Welcome to Issue Tracker</h1> 
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
              <div className="image">
                <img src={loginImg} />
              </div>
              <div className="form">
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
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
