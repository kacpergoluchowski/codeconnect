import React, { createRef, useRef } from "react";
import '../index.css';
import { useState } from "react";

export default function RegisterForm() {
    const name = createRef(0);
    const surname = createRef(0);
    const email = createRef(0);
    const password = createRef(0);
    const passwordAgain = createRef(0);
    
    function checkData() {
        let nullItems = 5;
        const dataValues = [name, surname, email, password, passwordAgain];
        dataValues.forEach(value => {
            if(value.current.value.length==0) {
                value.current.previousSibling.style.display = 'block';
            }
            else {
                value.current.previousSibling.style.display = 'none';
                nullItems--;
            }
        });
        if(nullItems==0) {
            changeLayout();
            registerUser(dataValues);
        }
    }

    function registerUser(...data) {
        const processData = [data[0][0].current.value, data[0][1].current.value, data[0][2].current.value, data[0][3].current.value, data[0][4].current.value]
        fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
            method: "POST",
            body: JSON.stringify({name: processData[0], surname: processData[1], email: processData[2], password: processData[3]}),
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    function changeLayout() {
        document.querySelector('.register-form').style.display = 'none';
        document.querySelector('.success').style.display = 'block'
    }

    return (
        <React.Fragment>
            <div className="register-form">
                <p className="error"> wrong name </p>
                <input type = 'text' placeholder="Name" ref = {name}/>
                <p className="error"> wrong surname </p>
                <input type = 'text' placeholder="Surname" ref = {surname}/>
                <p className="error"> wrong email </p>
                <input type = "email" placeholder="Email" ref = {email}/>
                <p className="error"> wrong password </p>
                <input type="password" placeholder="Password" ref = {password}/>
                <p className="error"> wrong password </p>
                <input type="password" placeholder="Repeat password" ref = {passwordAgain}/>
                <button onClick={checkData}> Register </button>
            </div>
            <div className="success">
                <h1> SUCCESS! </h1>
                <h3> Thank you for your registration! Confirmation of registration has been sent to your email </h3>
                <h3> Codeconnect Team </h3>
            </div>
        </React.Fragment>
        
    )
}