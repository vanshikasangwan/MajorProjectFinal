import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";
import users from './Userdata';
import MainPage from './main';

    class Login extends Component {
        constructor(props) {
          super(props);
          this.state = {
            username: '',
            password: '',
          };
        }
      
        handleUsernameChange = (e) => {
          this.setState({ username: e.target.value });
        };
      
        handlePasswordChange = (e) => {
          this.setState({ password: e.target.value });
        };
      
        handleLogin = () => {
          const { username, password } = this.state;
          // Example: Redirect to /main after successful login
          if (username === 'username' && password === 'password') {
            this.props.navigate('/main');
          }
        };

  render() {
    return (
      <div style={{ display: "flex", height: "550px" }} className="App">
        <div style={{ flex: 6, background: "#ff0000" }}>
          <img
            className="img-fill"
            src="https://t4.ftcdn.net/jpg/06/28/66/35/240_F_628663555_iQh85QYcflRtYWxuewfriZzxwhgy1LJk.jpg"
            alt="background"
          />
        </div>
        <div style={{ flex: 4, background: "white" }}>
          <div className="img-parent">
            <img
              className="img-contain"
              src="https://www.123shoot.com/wp-content/uploads/2022/03/20220321_RPS_AutismBlog_Spectrum-1024x489.png"
              alt="autism spectrum"
            />
          </div>
          <div className="test">
            <label>Autism Spectrum Disorder Test </label>
          </div>
          <div className="user">
            <label htmlFor="username"></label>
            <input
              className="input"
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password"></label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="check">
            <input type="checkbox" id="check" name="check" value="yes" />
            <label htmlFor="check"> I Agree To Get Updates On Whatsapp</label>
          </div>
          <div>
            <button className="login" type="button" onClick={this.handleLogin}>
              LOGIN
            </button>
          </div>
          <div className="button">
            <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
