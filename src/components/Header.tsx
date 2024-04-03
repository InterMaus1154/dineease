import {FC, useEffect, useState} from 'react';
import "../component_styles/Header.css";
import Logo from '../assets/images/Logo.png';
import HamburgerIcon from "../assets/images/Menu Icon.png";
import {Link} from "react-router-dom";

const Header : FC = () =>{

  //hamburger and nav controller
  const [isNavOpen, setNavOpen] = useState<boolean>(false);
  const [isSmallScreen, setSmallScreen] = useState<boolean>(window.innerWidth <= 768);

    useEffect(() => {

        const handleResize : EventListener = () : void =>{
            if(window.innerWidth <= 768){
                setSmallScreen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () =>{
            window.removeEventListener("resize", handleResize);
        }
    }, []);

  const handleMenuClick = () : void =>{
    setNavOpen(prevState => !prevState);
  };
  return(
    <header>
        <div className="Logo">
            <Link aria-label={"Homepage"} to={"/"}><img src={Logo} alt=""/></Link>
        </div>
        <nav className={isNavOpen ? "Nav-open" : ""} aria-hidden={!isSmallScreen ? false : !isNavOpen}>
            <ul>
                <li><Link tabIndex={!isSmallScreen ? 0 : -1} to={"/"}>Home</Link></li>
                <li><Link tabIndex={!isSmallScreen ? 0 : -1} to={"/about-us"}>About Us</Link></li>
                <li><Link tabIndex={!isSmallScreen ? 0 : -1} to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
        <button className={isNavOpen ? "Hamburger-nav-open Hamburger" : "Hamburger"} onClick={handleMenuClick}>
            <img src={HamburgerIcon} alt="Menu Icon"/>
        </button>
    </header>
  );
};

export default Header;