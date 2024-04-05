import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Replace with your login logic
    if (username === 'username' && password === 'password') {
      navigate('/main');
    } else {
      // Handle failed login (optional)
    }
  };

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
            value={username}
            onChange={handleUsernameChange}
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
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="check">
          <input type="checkbox" id="check" name="check" value="yes" />
          <label htmlFor="check"> I Agree To Get Updates On Whatsapp</label>
        </div>
        <div>
          <button className="login" type="button" onClick={handleLogin}>
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

export default Login;
