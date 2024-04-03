import {FC} from "react";
import SearchIcon from "../assets/images/Search Icon.png";
import HeroImage from "../assets/images/Hero Illustration.png";
import "../component_styles/Hero.css";


const Hero : FC = ()=>{
    return (
        <section className="Hero">
            <div className="Hero-text Hero-section">
                <h1>DineEase: Exceptional Dining Awaits.</h1>
                <p>Dive into culinary wonders with DineEase. We curate top-rated restaurants, each with distinct flavors
                    and ambiance. From international dishes to traditional delights and gastronomic adventures, find
                    your perfect spot with DineEase.</p>
                <a href="#" className={"Explore-rest-link"} title={"Search for a restaurant"}>
                    <span className="Search-icon" style={{display: "flex", justifyContent: "center", alignItems: "center"}}><img src={SearchIcon} alt="Search icon"/></span>
                    <span>Explore Restaurants</span>
                </a>
            </div>
            <div className="Hero-image Hero-section">
                <img src={HeroImage} alt="Hero image of DineEase. An illustrated man eating in a five star restaurant"/>
            </div>
            <div className="Decoration-shape" id={"Shape-1"}></div>
            <div className="Decoration-shape" id={"Shape-2"}></div>
            <div className="Decoration-shape" id={"Shape-3"}></div>
        </section>
    );
}

export default Hero;