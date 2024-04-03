import {FC, FormEvent} from 'react';
import "../component_styles/Contact.css";
import PhoneIcon from "../assets/images/phone.svg";
import EmailIcon from "../assets/images/email.svg";
import LocationIcon from "../assets/images/location-filled.svg";
import FacebookLogo from "../assets/images/Facebook Icon.png";
import InstaLogo from "../assets/images/Instagram Icon.png";
import TwitterLogo from "../assets/images/Twitter Icon.png";

const Contact: FC = () => {

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    }

    return (
        <section className="Contact-section">
            <div className="Contact-information-box">
                <div className="Contact-information-box-heading">
                    <h1 className="Section-heading">Contact Information</h1>
                    <h2 className="Section-subheading">Have an inquiry? Fill out the form to contact our team.</h2>
                </div>
                <div className="Contact-information-box-info-wrapper">
                    <a href="tel:+36301234567">
                        <img src={PhoneIcon} alt="Phone Icon"/>
                        +36 30 123 4567</a>
                    <a href="mailto: support@dineease.com">
                        <img src={EmailIcon} alt="Email Icon"/>
                        support@dineease.com</a>
                    <a href="#">
                        <img src={LocationIcon} alt="Location Icon"/>
                        132 Darthmouth Street Boston, Massachusetts 02156 United States
                    </a>
                </div>
                <div className="Contact-information-social-icons">
                    <div className="Social-icons">
                        <div className="Social-icon"><a href="#" target={"_blank"}><img src={FacebookLogo}
                                                                                        alt="Facebook logo leading for the facebook page"/></a>
                        </div>
                        <div className="Social-icon"><a href="#" target={"_blank"}><img src={InstaLogo}
                                                                                        alt="Instagram logo leading for the Instagram page"/></a>
                        </div>
                        <div className="Social-icon"><a href="#" target={"_blank"}><img src={TwitterLogo}
                                                                                        alt="Twitter logo leading for the Twitter page"/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Contact-information-form">
                <h1 className="Section-heading">Contact Us</h1>
                <h2 className="Section-subheading">Have an inquiry? Fill out the form to contact our team.</h2>
                <form onSubmit={handleFormSubmit} className={"Contact-form"}>
                    <input type="text" placeholder={"First Name"}/>
                    <input type="text" placeholder={"Last Name"}/>
                    <input type="text" placeholder={"Email"}/>
                    <input type="text" placeholder={"Phone Number"}/>
                    <textarea placeholder={"Message"} name="" id="" cols={30} rows={10}></textarea>
                    <input type="submit" value={"Send Message"}/>
                </form>
            </div>
        </section>
    );
};

export default Contact;