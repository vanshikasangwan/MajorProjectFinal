import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, useHistory, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import users from './Userdata';
import MainPage from './main';
import Login from './login.js';
import NewMemoryGame from './matchcards.js';
import ColourMemory from './colourmemory.jsx';
import NewColourMemory from './colourmemory.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      loginError: false,
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
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      this.setState({ isLoggedIn: true, loginError: false });
      this.props.history.push('/main');
    } else {
      this.setState({ loginError: true });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/matchcards" element ={<NewMemoryGame />}/>
        <Route path = "/colourmemory" element ={<NewColourMemory />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
