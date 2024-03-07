import React from "react";
import Banner from "../../Components/Banner/Banner";
import activiteimage from "../../Assets/activiteimagetest.png";
import Horaires from "../../Components/Horaires/Horaires";
import ActivityList from "../../Components/ActivityList/ActivityList";
import Form from "../../Components/Form/Form";
import './activities.css';
import accesyoupikids from "../../Assets/accesyoupikids.png";


const Activities = () => {
  const isHomePage = false;
  return (
    <div className="Activity-page">
      {isHomePage ? null : (
        <Banner
          image={activiteimage}
          alt="Bannière de la page À propos"
          className="image-sombre"
        />
      )}
      
      
      <ActivityList />
      <Horaires />
      <Banner
          image={accesyoupikids}
          alt="Accès Youpi Kids"
          paddingTop="60px"
          
        />

      <Form />
      
    </div>
  );
};

export default Activities;