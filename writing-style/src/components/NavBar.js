import React, { useState} from 'react';
import './NavBar.css';
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function NavBar({ isDark, setIsDark }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return <>
        <nav className = "navbar">
            <ul className = {isOpen ? "nav-link activate" : "nav-link"}>
                <li><Link to = "/"> Home</Link></li>
                <li><Link to = "/writing"> Music</Link></li>
            </ul>
            <div className = "hamburger" onClick = {toggleMenu}>
                <FaBars/>
            </div>
        </nav>
    </>
}

export default NavBar
