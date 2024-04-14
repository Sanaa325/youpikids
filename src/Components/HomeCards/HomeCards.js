import React from 'react';
import { Link } from 'react-router-dom';
import "./homecards.css";
import activitesimage from "../../Assets/activitesimage.jpeg";
import restimage from "../../Assets/restimg.jpg";
import annivimage from "../../Assets/annivimage.jpeg";
import anniv from "../../Assets/anniv.png";


function HomeCards() {
    return (
        <div className="homecard-container">
            <div className="card">
                <Link to="/activites" className="link">
                    <img src={activitesimage} alt="Activités" />
                    <div className="card-overlay">
                        <h3>Activités</h3>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/anniversaires" className="link">
                    <img src={anniv} alt="Anniversaires" />
                    <div className="card-overlay">
                        <h3>Anniversaires</h3>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/restaurant" className="link">
                    <img src={restimage} alt="Restaurant" />
                    <div className="card-overlay">
                        <h3>Restaurant</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomeCards;