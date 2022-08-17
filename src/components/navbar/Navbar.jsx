import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navContainer">
            <div className="navWrapper">
                <Link to="/">   
                    <span className="logo">BlogBook</span>
                </Link>
                <div className="navItems">
                    <Link to="/">
                        <span className="navItemText">Home</span>
                    </Link>
                    <Link to="post">    
                        <span className="navItemText">Add-Post</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar