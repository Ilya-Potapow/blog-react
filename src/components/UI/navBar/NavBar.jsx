import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navBar">
        <div className="navBar_items">
            <Link to="/posts" className="links">Posts</Link>
            <Link to="/about" className="links">About</Link>
        </div>
    </nav>
  )
}

export default NavBar