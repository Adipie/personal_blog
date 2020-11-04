import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);  

    return <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">
                    <p>A.P</p>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>about</Link>
                    </li>
                </ul>
            </div>
        </div>
    
    </>
    
    // <div id="menu">
               
    //        </div>
}

export default NavBar;
