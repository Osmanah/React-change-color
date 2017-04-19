import React from 'react'; // eslint-disable-line no-unused-vars
import logo from '../logo.svg';
import './Header.css';

const Header = (props) =>
  <div className="App-header" style={props.objStyle}>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>CHANGE MY COLOR</h1>
  </div>;

export default Header;
