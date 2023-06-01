import React from 'react';
import './pages/css/header.css';
import {Link} from 'react-router-dom'

function Header() {
  const linkStyle = {
    margin: "6rem",
    textDecoration: "none",
    color: 'white',
    fontFamily: 'Raleway',
    opacity:'75%'
  };
  return (
    <header className="header">
      <h1 href='/'>Veronica Griggs</h1>
      <div className="nav">
      <Link to="/about" style={linkStyle}>About Me</Link>
      <Link to='/portfolio' style={linkStyle} >Portfolio</Link>
      <Link to='/contact' style={linkStyle}>Contact</Link>
      {/* <Link to='/resume' style={linkStyle}>Resume</Link> */}
      </div>
    </header>
  );
}

export default Header;