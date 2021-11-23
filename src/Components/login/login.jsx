import React from "react";
import loginImg from "../../login.svg";
import axios from 'axios';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePasswd = this.onChangePasswd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
            username:"",
            password:"",
            errors:{}
        }
  }

  onChangeUserName(e){
    this.setState({ username: e.target.value })
  }
  onChangePasswd(e){
    this.setState({ password: e.target.value })
  }


  onSubmit(e){
    e.preventDefault()

    const userObject = {
        name: this.state.username,
        password: this.state.password
      };

    console.log(userObject);

    axios.post('http://localhost:8000/login', userObject)
     .then((res) => {
        console.log(res.data)
      }).catch((error) => {
          console.log(error)
        });

      this.setState({ name: '', email: '' })
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
                  <label htmlFor="username">Username</label>
                  <input type="text" value={this.state.username} onChange={this.onChangeUserName} name="username" placeholder="username" />
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
