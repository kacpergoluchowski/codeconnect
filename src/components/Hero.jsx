import React from "react";
import '../index.css';
import heroImage from '../image/hero-image.png'
import { Link, Outlet } from "react-router-dom";

export default function Hero() {
    return (
        <div className="hero">
            <div>
                <h1> Welcome to the community of developers - where, where passion and coding meet togheter! </h1>
                <Link to = '/register' className="redirect-button"> <button> SIGN UP! </button> </Link>
            </div>
            <img src = {heroImage}/>
        </div>
    )
}