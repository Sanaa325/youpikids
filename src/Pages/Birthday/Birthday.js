import React, { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import annivimage from "../../Assets/annivimagetest.png";
import Horaires from "../../Components/Horaires/Horaires";
import BirthdayList from "../../Components/BirthdayList/BirthdayList";
import "./birthday.css"
import Form from "../../Components/Form/Form";
import accesyoupikids from "../../Assets/accesyoupikids.png";



const Birthday = () => {
  const isHomePage = false;



  return (
    <div className="birth-page">
      {isHomePage ? null : (
        <Banner
          image={annivimage}
          alt="Bannière de la page Anniversaires"
          
        />
      )}
      


      <BirthdayList />
      <div className="option-card">
        <h3>Options supplémentaires</h3>
        <hr></hr>
        <div className="text-position">
          <h4>Accès au parc en illimité </h4>
          <p>+ 1,50e par enfants</p>
        </div>
        <hr></hr>
        <div className="text-position">
          <h4>Adulte supplémentaire  </h4>
          <p>+ 2e par adultes</p>
        </div>
        <hr></hr>
        <div className="text-position">
          <h4>Piñata </h4>
          <p>+ 35e</p>
        </div>
        <hr></hr>
      </div>
      <Horaires />
      <Banner
        image={accesyoupikids}
        alt="Accès Youpi Kids"
        paddingTop="60px"
        includeAnchor={false}
      />
      <Form />
    </div>
  );
};

export default Birthday;
