import React from "react";
import '../index.css';
import person1 from '../image/person-1.png'
import person2 from '../image/person-2.png'
import person3 from '../image/person-3.png'

const personData = [{
    id: 1,
    image: person1,
    name: "Kacper"
},
{
    id: 2,
    image: person2,
    name: "Dominik"
},
{
    id: 3,
    image: person3,
    name: "Wiktor"
}];

function PersonCard(props) {
    const {image, name} = props;
    return (
        <div className="person-card">
            <img src = {image}/>
            <h1> {name} </h1>
        </div>
    )
}

export default function Team() {
    return (
        <div className="team">
            <h1> Meet our Team! </h1>
            <p> Our team consists of people with many years of experience in it. Here are a few of them. </p>
            <div>
            {
                personData.map(item => <PersonCard image = {item.image} name = {item.name} key = {item.id}/>)
            }
            </div>
        </div>
    )
}