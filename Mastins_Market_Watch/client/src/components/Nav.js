import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <h4>Mastin's Market Watch</h4>
      <div>
        <Link to="/">Home | </Link>
        <Link to="/newprofile">New Profile | </Link>
        <Link to="/markets">Markets | </Link>
        {/* <Link to="/login">Login | </Link> */}
      </div>
    </nav>
  );
}

export default Nav;
