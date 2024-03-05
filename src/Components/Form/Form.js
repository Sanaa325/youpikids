import React from 'react';
import logo from "../../Assets/logo.jpeg";
import "../Form/form.css";
import fb from "../../Assets/fb.png";
import insta from "../../Assets/insta.png";
import { Link } from 'react-router-dom';


function Form() {
    return (
        <>
            <h2 className='form-title'>Nous contacter</h2>
            <div className="formulaire-container">
                <div className="logo-section">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo-left" />
                    </Link>
                    <div className="follow-us">
                        <h3>Suivez-nous !</h3>
                        
                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=61555044714292" target="_blank" rel="noopener noreferrer">
                                <img src={fb} alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/youpikids_sarcelles?igsh=MWZjam52cWV3YW5oaw==" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <div className="form-section">
                        <form method="post" action="">
                            <div className="form-fields">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" name="nom" id="nom" placeholder="Entrez votre nom" />
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Entrez votre adresse email" />
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message" className='msg'></textarea>
                                <input type="submit" value="Envoyer" className="custom-button" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Form;