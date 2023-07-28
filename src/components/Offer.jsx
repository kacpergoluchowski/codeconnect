import React from "react";
import '../index.css';
import tickImage from '../image/tick.png'

const data = [{
    id: 1,
    courseType: "FREE",
    price: 0,
},
{
    id: 2,
    courseType: "STANDARD",
    price: 199,
    benefitFirst: "Application development" 
},
{
    id: 3,
    courseType: "PREMIUM",
    price: 299,
    benefitFirst: "Application development",
    benefitSecond: "Design creation"
}, 
{
    id: 4,
    courseType: "PRO",
    price: 399,
    benefitFirst: "Application development",
    benefitSecond: "Design creation",
    benefitThird: "Positioning of the page"
}]

function OfferCard(props) {
    return (
        <div className="offer-card">
            <h2> Course </h2>
            <h1> {props.courseType} </h1>
            <ul>
                <li> <img src = {tickImage}/> {props.benefitFirst} </li>
                <li> <img src = {tickImage}/> {props.benefitSecond} </li>
                <li> <img src = {tickImage}/> {props.benefitThird} </li>
            </ul>
            <button> {props.price} $ - BUY </button>
        </div>
    )
}

OfferCard.defaultProps = {
    benefitFirst: "------------------------------------",
    benefitSecond: "------------------------------------",
    benefitThird: "------------------------------------"
}

export default function Offer() {
    return (
        <React.Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L40,256C80,256,160,256,240,229.3C320,203,400,149,480,128C560,107,640,117,720,138.7C800,160,880,192,960,213.3C1040,235,1120,245,1200,240C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <div className="offer">
                <h1> Do you want to enter the IT world? </h1>
                <p> Our courses are created by experts! Buy them now! </p>
                <div>
                {
                    data.map(item => {return (<OfferCard courseType = {item.courseType} benefitFirst = {item.benefitFirst} benefitSecond = {item.benefitSecond} benefitThird = {item.benefitThird} price = {item.price} key = {item.id}/>)})
                }
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L40,256C80,256,160,256,240,229.3C320,203,400,149,480,128C560,107,640,117,720,138.7C800,160,880,192,960,213.3C1040,235,1120,245,1200,240C1280,235,1360,213,1400,202.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </React.Fragment>
        
    )
}