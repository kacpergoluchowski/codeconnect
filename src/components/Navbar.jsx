import React, { useEffect } from "react";
import '../index.css';
import codeConnectLogo from '../image/codeconnect-logo.png'
import mobileMenu from '../image/iconmonstr-menu-2-64.png'
import close from '../image/iconmonstr-x-mark-9-48.png'
import facebook from '../image/facebook.png'

function showMenu() {
   document.querySelector('.mobileMenu').style.display = 'block';
}

function hideMenu() {
    document.querySelector('.mobileMenu').style.display = 'none';
}

export default function Navbar() {
    return (
        <header>
            <img src = {codeConnectLogo}/>
            <nav>
                <ul>
                    <li> HOME </li>
                    <li> FORUM </li>
                    <li> SIGN IN </li>
                </ul>
            </nav>
            <div className="mobileMenu">
                <img src = {close} className="closeMobileButton" onClick={hideMenu}/>
                <ul>
                    <li> HOME </li>
                    <li> FORUM </li>
                    <li> SIGN IN </li>
                </ul>
            </div>
            <img src = {mobileMenu} className="mobileMenuButton" onClick={showMenu}/>
        </header>
    )
}