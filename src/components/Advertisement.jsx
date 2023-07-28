import React from "react";
import '../index.css';
import advertisementImage from '../image/advertisement-image.png'

export default function Advertisement() {
    return (
        <React.Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"> <path fill="#ffffff" fill-opacity="1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,202.7C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> </svg>            
            <div className="advertisement">
                <img src = {advertisementImage}/>
                <div>
                    <div>
                        <h1> Are you looking for fellow programmers to join your team? </h1>
                        <p> We present you an innovative platform that will allow you to reach the best developers on the market! Whether you need experienced full-stack developers, 
                            artificial intelligence specialists or security experts, our platform will enable you to find the perfect candidate to meet your requirements. 
                        </p>
                        <button> GO TO WEB! </button>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"> <path fill="#ffffff" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,170.7C640,149,800,75,960,53.3C1120,32,1280,64,1360,80L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path> </svg> 
        </React.Fragment>
        
    )
}
