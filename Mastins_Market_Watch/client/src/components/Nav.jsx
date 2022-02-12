import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

export default function Nav() {
  return (
    <Router>
    <nav className="navbar">
      <h4>Mastin's Market Watch</h4>
      <div>
        <Link to="/home">Home | </Link>
        <Link to="/markets">Markets | </Link>
        <Link to="/">New Profile | </Link>
        <Link to="/login">Login | </Link>
      </div>
    </nav>
    </Router>
  )
}
