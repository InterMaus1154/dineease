import {FC} from 'react';
import "../component_styles/Footer.css";
import Logo from "../assets/images/Logo.png";
import {Link} from "react-router-dom";
import FacebookLogo from "../assets/images/Facebook Icon.png";
import InstaLogo from "../assets/images/Instagram Icon.png";
import TwitterLogo from "../assets/images/Twitter Icon.png";

const Footer: FC = () => {
    return (
        <footer>
            <div className="Footer-content">
                <div className="Footer-left Footer-flex">
                    <div className="Footer-logo">
                        <img src={Logo} alt="An image of the logo of dineease"/>
                    </div>
                    <Link to={"privacy-policy"}>Privacy Policy</Link>
                    <div className="Footer-contact">
                        <a href="tel:+36301234567" title={"Call the support of Dineease"}>+36 30 123 4567</a>
                        <a href="mailto:support@dineease.com"
                           title={"Email the support of Dineease"}>support@dineease.com</a>
                    </div>
                    <span>&copy; {new Date().getFullYear()} - All rights reserved</span>
                </div>
                <div className="Footer-right Footer-flex">
                    <span>Follow Us</span>
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
        </footer>
    );
};

export default Footer;