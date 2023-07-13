import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import React, { Component } from 'react';

const logo = require('./images/logo.png');

class Header extends Component {

  render() {
    return (
      <header className="App-header">

      <img src={logo} height="200px" />
      <div className='title'>
      <h1 color='white'>Warehouse Management System</h1>

      </div>
    </header>
    );
  }
}

export default Header;