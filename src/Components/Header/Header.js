import React from "react";
import logo  from "../../Assets/logo.jpeg";
import Navigation from "./Navigation/Navigation";
import "../../Components/Header/header.css"
import { Link } from 'react-router-dom';




function Header() {
    return (
        <header className='Header'>
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <nav>
                <Navigation />
            </nav>
        </header>
    );
}

export default Header;