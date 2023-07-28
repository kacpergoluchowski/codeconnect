import React, { useState } from "react";
import '../index.css';
import newsletterImage from '../image/newsletter-image.png'
import newsletterTick from '../image/newsletter-tick.png'
        
export default function Newsletter() {
    let [email, setEmail] = useState("");

    function sendMail(item) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/mail`, {
            method: "POST",
            body: JSON.stringify({email:item}),
            headers: {
                "Content-type": "application/json",
            }
        });
    }
    
    return (
        <div className="newsletter">
            <h1> NEWSLETTER </h1>
            <div>
                <div className="form">
                    <h1> Subscribe to our weekly newsletter! </h1>
                    <ul>
                        <li> <img src = {newsletterTick}/> The latest trends and technologies </li> 
                        <li> <img src = {newsletterTick}/> Tips and tricks from the experts </li>
                        <li> <img src = {newsletterTick}/> Events and conferences </li>
                        <li> <img src = {newsletterTick}/> Community and collaboration </li>
                    </ul>
                    <input type = 'email' placeholder="Your email..." onChange={e => setEmail(e.target.value)}/>
                    <button onClick={() => sendMail(email)}> Subscribe </button>
                </div>
                <img src = {newsletterImage}/>
            </div>
        </div>
    )
           
}   