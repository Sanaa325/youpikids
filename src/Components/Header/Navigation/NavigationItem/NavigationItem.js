import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../NavigationItem/navigationitem.css';

function NavigationItem(props) {
    const location = useLocation();
    return (
        <li className="NavigationItem"> 
            <Link to={props.to} style={
                location.pathname === props.to ? { textDecoration: "none" } : null
            }>
                {props.children}
            </Link>
        </li>
    );
}

export default NavigationItem;