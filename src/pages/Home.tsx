import React, {FC} from 'react';
import Hero from "../components/Hero";
import FeaturedRestaurants from "../components/FeaturedRestaurants";
import "../component_styles/Home.css";
import TestimonialSection from "../components/TestimonialSection";
import RestaurantsSection from "../components/RestaurantsSection";


const Home : FC = () =>{
  return(
    <>
        <Hero></Hero>
        <FeaturedRestaurants />
        <TestimonialSection></TestimonialSection>
        <RestaurantsSection />
    </>
  );
};

export default Home;