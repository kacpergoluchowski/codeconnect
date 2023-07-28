import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Advertisement from "../components/Advertisement";
import Team from "../components/Team";
import Offer from "../components/Offer";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Advertisement/>
            <Team/>
            <Offer/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
