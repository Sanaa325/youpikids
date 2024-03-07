import React from "react";
import Banner from "../../Components/Banner/Banner";
import groupimage from "../../Assets/groupimagetest.png";
import Form from "../../Components/Form/Form";
import Horaires from "../../Components/Horaires/Horaires";
import accesyoupikids from "../../Assets/accesyoupikids.png";
import "./groups.css"



const Groups = () => {
  const isHomePage = false;
  return (
    <div className="group-page">
      {isHomePage ? null : (
        <Banner
          image={groupimage}
          alt="Bannière de la page groupe"
        />
      )}

      
      <div>
        
        <p className="group-text">Youpi Kids propose des tarifs réduits aux groupes à partir de 10 enfants (sur réservation).
Nous pouvons également proposer des tarifs avantageux pour les Collectivités, les CE et associations.<br />
Contactez nous, nous vous proposerons des prestations sur mesure pour rendre vos événements inoubliables.</p>
      </div>
      <Form />
      
      
      

      

    </div>
  );
};

export default Groups;