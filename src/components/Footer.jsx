import React from "react";
import '../index.css';
import reactLogo from '../image/react-logo 1.png'
import nodeLogo from '../image/node logo 2.png'
import netlifyLogo from '../image/netlify logo 1.png'
import facebookLogo from '../image/facebook.png'
import instagramLogo from '../image/instagram.png'
import tiktokLogo from '../image/tiktok.png'
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'

function forwarding(e) {
    const targetPage = e.target.innerHTML;
}

export default function Footer() {
    return (
            <React.Fragment>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L40,32C80,32,160,32,240,80C320,128,400,224,480,224C560,224,640,128,720,85.3C800,43,880,53,960,80C1040,107,1120,149,1200,181.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                <footer>
                    <div>
                        <ul>
                            <li> <h1> MENU </h1> </li>
                            <li> HOME </li>
                            <li> FORUM </li>
                            <li> CONTACT </li>
                        </ul>
                        <ul>
                            <li> <h1> MEDIA </h1> </li>
                            <Link to = "https://www.facebook.com/"> <li onClick={e => forwarding(e)}> <img src  = {facebookLogo}/> <p> FACEBOOK </p> </li> </Link>
                            <Link to = "https://www.instagram.com/"> <li onClick={e => forwarding(e)}> <img src = {instagramLogo}/> <p> INSTAGRAM </p> </li> </Link>
                            <Link to = "https://www.tiktok.com/pl-PL/"> <li onClick={e => forwarding(e)}> <img src = {tiktokLogo}/> <p> TIKTOK </p> </li> </Link>
                        </ul>
                        <ul>
                            <li> <img src = {reactLogo}/> </li>
                            <li> <img src = {nodeLogo}/> </li>
                            <li> <img src = {netlifyLogo}/> </li>
                        </ul>
                    </div>
                    <h1> CODECONNECT 2023 </h1>
                </footer>
            </React.Fragment>
    )
}