import React, { Component } from 'react';
import logo from './starwars.gif';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <h1 className="App-title">Create a Star Wars React App, I will.</h1>
          <img src={logo} className="starWars-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;
