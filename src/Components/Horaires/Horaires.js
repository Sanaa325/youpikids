import React from 'react';
import './horaires.css';

function Horaires() {
    return (
        <div id="horaires" className="horaires-container">
            <h2>Horaires et Calendrier</h2>
            <p className='intro'>Des horaires flexibles pour s'adapter à la disponibilité des familles, conçus pour vous offrir la meilleure expérience</p>
            <div className="horaires-grid">
                <div className="periode">
                    <h3>Période Scolaire</h3>
                    <span className="jours">Mercredi & Dimanche</span>
                    <p className='heure'>De 10h00 à 19h00</p>
                    <span className="jours">Vendredi</span>
                    <p className='heure'>De 14h00 à 19h00</p>
                    <span className="jours">Samedi</span>
                    <p className='heure'>De 10h00 à 20h00</p>
                </div>
                <div className="periode">
                    <h3>Période de Vacances</h3>
                    <span className="jours">Vacances scolaires</span>
                    <p className='heure'>Tous les jours de 10h00 à 19h00 <br />sauf le samedi de 10h à 20h00</p>
                    <span className="jours">Vacances d'été</span>
                    <p className='heure'>Tous les jours de 10h00 à 20h00</p>
                </div>
                <div className="periode">
                    <h3>Horaires Exceptionnels</h3>
                    <span className="jours">Jours fériés</span>
                    <p className='heure'>De 10h00 à 20h00</p>
                </div>
            </div>
        </div>
    );
}

export default Horaires;
