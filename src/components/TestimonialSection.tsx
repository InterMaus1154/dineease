import {FC, useRef} from "react";
import TestimonialBox from "./TestimonialBox";
import "../component_styles/Testimonial.css";


//Testimonial template
export interface ITestimonial {
    content: string;
    author: string;
}

const TestimonialSection: FC = () => {


    // Testimonials
    const TESTIMONIALS = useRef<ITestimonial[]>(
        [
            {
                content: "Exquisite flavors, impeccable service, and a memorable ambiance – DineEase made our celebration truly special!",
                author: "Robert & Emily"
            },
            {
                content: "DineEase guided us to hidden gems we never knew existed! We've become food adventurers, thanks to this platform",
                author: "Lisa & Mark"
            },
            {
                content: "With DineEase, we've uncovered culinary treasures right in our city. Every dining recommendation feels like an exclusive invitation to a world of flavors. We thought we knew our local dining scene, but DineEase introduced us to so much more.",
                author: "Emma & Jacob"
            }
        ]
    );

    return (
        <section className={"Testimonial-section"}>
            <div className="Testimonial-content">
                <h1 className={"Section-heading"}>Delightful Experiences Shared by Our Guests</h1>
                {
                    TESTIMONIALS.current.map((testimonial, index) => <TestimonialBox key={index} index={index+1} content={testimonial.content} author={testimonial.author} />)
                }
            </div>
        </section>
    );
};

export default TestimonialSection;