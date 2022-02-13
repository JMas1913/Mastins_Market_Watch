import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <h4>Mastin Fitness</h4>
      <div>
        <Link to="/">New Profile | </Link>
        <Link to="/home">Home | </Link>
        <Link to="/markets">Markets | </Link>
        <Link to="/login">Login | </Link>
      </div>
    </nav>
  );
}

export default Nav;
