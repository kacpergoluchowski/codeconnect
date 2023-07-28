import React from "react";
import Navbar from '../components/Navbar';
import image from '../image/membership.png'
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="register-page">
                <img src = {image} className="register-image"/>
                <div>
                    <RegisterForm/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RegisterPage;