import React, { useState, useRef, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import restimg from "../../Assets/restimagetest.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from "../../Components/Menu/Menu";
import MenuCard from "../../Components/MenuCard/MenuCard";
import menutest from "../../Assets/test-menu.jpg";
import skinnyfries from "../../Assets/skinnyfries.jpg";
import onionrings from "../../Assets/onionrings.jpg";
import sweetfries from "../../Assets/sweetfries.jpg";
import chilicheesefries from "../../Assets/chilicheesefries.jpg";
import chilidog from "../../Assets/chilicheesedog.jpg";
import originalcheese from "../../Assets/originalcheese.jpg";
import chicken from "../../Assets/chicken.jpg";
import hotchili from "../../Assets/hotchili.jpg";
import smokin from "../../Assets/smokin.jpg";
import sofrench from "../../Assets/sofrench.jpg";
import chocomilk from "../../Assets/chocomilk.png";
import fraisemilk from "../../Assets/fraisemilk.png";
import oreomilk from "../../Assets/oreomilk.png";
import bananemilk from "../../Assets/bananemilk.png";
import vanillemilk from "../../Assets/vanillemilk.png";
import oasis from "../../Assets/oasis.webp";
import sprite from "../../Assets/sprite.jpg";
import icedtea from "../../Assets/icedtea.jpg";
import jusdefruit from "../../Assets/jusdefruit.jpg";
import originalburger1 from "../../Assets/originalburger1.jpg";
import sofrenchburger1 from "../../Assets/sofrenchburger1.jpg";
import chiliburger1 from "../../Assets/chiliburger1.jpg";
import smokinburger1 from "../../Assets/smokinburger1.jpg";
import "./restaurant.css";
import Form from "../../Components/Form/Form";
import accesYK from "../../Assets/accesYK.png"
import accesYoupK from "../../Assets/accesYoupK.jpg";
import accesyoupikids from "../../Assets/accesyoupikids.png";
import testorange from "../../Assets/testorange.png";
import fraisier from "../../Assets/fraisier.png";



const Restaurant = () => {
  const [selectedCategoryLilSmash, setSelectedCategoryLilSmash] = useState("Youpi Meals");
  const [selectedCategoryYoupiSweet, setSelectedCategoryYoupiSweet] = useState("Crêpes");
  const lilSmashSliderRef = useRef(null);
  const youpiSweetSliderRef = useRef(null);
  // Vous pouvez remplacer ces données par celles de votre propre structure de données
  const sweetItems = {
    "Crêpes": [
      { name: "Crêpe 1", description: "Description de la Crêpe 1", image: menutest },
      { name: "Crêpe 2", description: "Description de la Crêpe 2", image: menutest },
      { name: "Crêpe 3", description: "Description de la Crêpe 3", image: menutest },
      { name: "Crêpe 4", description: "Description de la Crêpe 4", image: menutest },
      // Ajoutez d'autres éléments selon vos besoins
    ],
    "Gauffres": [
      { name: "Gauffre 1", description: "Description de la Gauffre 1", image: menutest },
      { name: "Gauffre 2", description: "Description de la Gauffre 2", image: menutest },
      { name: "Gauffre 3", description: "Description de la Gauffre 3", image: menutest },
      { name: "Gauffre 4", description: "Description de la Gauffre 4", image: menutest },
      // Ajoutez d'autres éléments selon vos besoins
    ],
    "Muffins": [
      { name: "Muffin 1", description: "Description du Muffin 1", image: menutest },
      { name: "Muffin 2", description: "Description du Muffin 2", image: menutest },
      { name: "Muffin 3", description: "Description du Muffin 3", image: menutest },
      { name: "Muffin 4", description: "Description du Muffin 4", image: menutest },
      
    ],
    "Gateaux": [
      { name: "Gateau 1", description: "Description du Gateau 1", image: menutest },
      { name: "Gateau 2", description: "Description du Gateau 2", image: menutest },
      { name: "Gateau 3", description: "Description du Gateau 3", image: menutest },
      { name: "Gateau 4", description: "Description du Gateau 4", image: menutest },
     
    ],
    "Boissons chaudes": [
      { name: "Boisson chaude 1", description: "Description Boisson chaude 1", image: menutest },
      { name: "Boisson chaude 2", description: "Description Boisson chaude 2", image: menutest },
      { name: "Boisson chaude 3", description: "Description Boisson chaude 3", image: menutest },
      { name: "Boisson chaude 4", description: "Description Boisson chaude 4", image: menutest },
      
    ],
    "Signatures": [
      { name: "Signature 1", description: "Description Signature 1", image: menutest },
      { name: "Signature 2", description: "Description Signature 2", image: menutest },
      { name: "Signature 3", description: "Description Signature 3", image: menutest },
      { name: "Signature 4", description: "Description Signature 4", image: menutest },
      
    ],
    "Boissons fraîches": [
      { name: "Boisson fraîche 1", description: "Description Boisson fraîche 1", image: menutest },
      { name: "Boisson fraîche 2", description: "Description Boisson fraîche 2", image: menutest },
      { name: "Boisson fraîche 3", description: "Description Boisson fraîche 3", image: menutest },
      { name: "Boisson fraîche 4", description: "Description Boisson fraîche 4", image: menutest },
      
    ],
    "Confiseries": [
      { name: "Confiserie 1", description: "Description Confiserie 1", image: menutest },
      { name: "Confiserie 2", description: "Description Confiserie 2", image: menutest },
      { name: "Confiserie 3", description: "Description Confiserie 3", image: menutest },
      { name: "Confiserie 4", description: "Description Confiserie 4", image: menutest },
      
    ],
    
  };

  const menuItems = {
    "Youpi Meals": [
      { name: "Youpi Original Cheese", description: "Burger Original Cheese + Frites + Boisson", image: originalcheese },
      { name: "Youpi Smokin", description: "Burger Smokin + Frites + Boisson", image: smokin },
      { name: "Youpi Chicken", description: "Burger Chicken + Frites + Boisson", image: chicken },
      { name: "Youpi Hot Chili", description: "Burger Hot Chili + Frites + Boisson", image: hotchili },
      { name: "Youpi So French", description: "Burger So French + Frites + Boisson", image: sofrench },
    ],
    "Sides": [
      { name: "Skinny Fries", image: skinnyfries },
      { name: "Homemade Oninon Rings", image: onionrings },
      { name: "Chili Cheese Fries", image: chilicheesefries },
      { name: "Sweet Potatoe Fries", image: sweetfries },
      { name: "Chili Cheese Dog", image: chilidog },
    ],
    

    "Boissons": [
      { name: "Sodas", image: icedtea },
      { name: "Jus de fruit", image: jusdefruit },
      { name: "Oasis", image: oasis },
      { name: "Eau/Eau Gazeuse", image: sprite },

    ],
    "Milkshakes": [
      { name: "Milkshake Vanille", image: vanillemilk },
      { name: "Milkshake Fraise", image: fraisemilk },
      { name: "Milkshake Chocolat", image: chocomilk },
      { name: "Milkshake Banane- Maui", image: bananemilk },
      { name: "Milkshake Oreo Cookies", image: oreomilk },

    ],
  };



  useEffect(() => {
    if (lilSmashSliderRef.current) {
      lilSmashSliderRef.current.slickGoTo(0);
    }
  }, [selectedCategoryLilSmash]);

  useEffect(() => {
    if (youpiSweetSliderRef.current) {
      youpiSweetSliderRef.current.slickGoTo(0);
    }
  }, [selectedCategoryYoupiSweet]);

  const showCategoryLilSmash = (category) => {
    setSelectedCategoryLilSmash(category);
  };

  const showCategoryYoupiSweet = (category) => {
    setSelectedCategoryYoupiSweet(category);
  };

  const isHomePage = false;

  return (
    <div className="resto-page">
      {isHomePage ? null : (
        <Banner
          image={restimg}
          alt="Bannière de la page Restaurant"
          className="banner-overlay"
          includeAnchor={false}
        />
      )}
      

      {/* Section Lil' Smash Burger */}
      <section>
        <div className="lil-smash-burger-section">
          <div className="left-content">
            <img src={testorange} alt="Lil' Smash Burger Image" />
          </div>
          <div className="right-content">
            <h2 className="leftie">Découvrez l'univers savoureux de <br /> <span style={{ color: 'orange' }}>Lil' Smash</span> Burger</h2>
            <hr />
            <p>
              Plongez dans notre menu salé, conçu pour satisfaire vos papilles avec des saveurs authentiques et gourmandes. <br />
              Chez Lil' Smash Burger, chaque bouchée est une invitation à savourer la simplicité et le plaisir d'un bon repas. <br />
              Venez vous régaler dans une ambiance décontractée et conviviale!</p>
          </div>
        </div>
        <div className="heading-content">
          <div className="heading-title">

            <h2 >
              <span style={{ color: 'orange' }}>Lil Smash</span> Menu
            </h2>
          </div>
        </div>
        <div className="menu-section" style={{ backgroundColor: '#FFEDC7' }}>

          <Menu
            menuItems={menuItems}
            showCategory={showCategoryLilSmash}
            selectedCategory={selectedCategoryLilSmash}
          />
          <div>
            {selectedCategoryLilSmash && menuItems[selectedCategoryLilSmash] ? (
              <div>
                <Slider
                  ref={lilSmashSliderRef}
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={3}
                  slidesToScroll={1}
                >
                  {menuItems[selectedCategoryLilSmash].map((item, index) => (
                    <MenuCard
                      key={`${selectedCategoryLilSmash}-${index}`}
                      image={item.image}
                      name={item.name}
                      description={item.description}
                    />
                  ))}
                </Slider>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Section Youpi Sweety */}
      <section>
        <div className="youpisweety-section">
          <div className="left-content">
            <h2 className="leftie">Découvrez l'univers sucré de <br /> <span style={{ color: '#F15A35' }}>Youpi Sweety</span> </h2>
            <hr />
            <p> Plongez dans notre monde de délices faits maison, des gaufres moelleuses aux crêpes légères, en passant par des gâteaux irrésistibles.<br /> Notre menu sucré a été créé avec amour pour égayer vos papilles et vous offrir une expérience sucrée mémorable.<br /> Chez Youpi Sweety, laissez-vous emporter par la douceur de nos créations sucrées, confectionnées avec soin et passion. <br /></p>
          </div>
          <div className="right-content">
            <img src={fraisier} alt="Youpi sweety Image" />
          </div>
        </div>
        <div>
          


        </div>
      </section>

      <Banner
          image={accesyoupikids}
          alt="Accès Youpi Kids"
          paddingTop="60px"
          
          
        />

      <Form />
    </div>
  );
};

export default Restaurant;