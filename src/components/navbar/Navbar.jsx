import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCount, increaseCount } from '../../redux/postsSlice';
import "./navbar.css";

const Navbar = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCount);

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
                    <Link to="user">    
                        <span className="navItemText">All-Authors</span>
                    </Link>
                    <button
                        onClick={() =>
                            dispatch(increaseCount())
                        }
                    >{count}</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar