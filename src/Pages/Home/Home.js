import React from "react";
import VideoBanner from "../../Components/VideoBanner/VideoBanner";
import "../../Pages/Home/home.css";
import accueilVideo from "../../Assets/testvid.mp4";
import HomeCards from "../../Components/HomeCards/HomeCards";
import Horaires from "../../Components/Horaires/Horaires";
import Form from "../../Components/Form/Form";
import soleil from "../../Assets/soleil.jpeg";
import Banner from "../../Components/Banner/Banner";
import accesyoupikids from "../../Assets/accesyoupikids.png";


function Home() {
  const isHomePage = true; 

  return (
    <div className="Home">
      <div>
      {isHomePage ? (
        <VideoBanner
          video={accueilVideo}
          
        />
      ) : null}
      <div className="home-bannerTitle">
        <h1>Bienvenue chez Youpi Kids</h1>
        <p>Le parc de jeux qui fait pétiller les yeux des enfants et des plus grands</p>
        
        
      </div>
      </div>
      <div className="activites-intro">
        <p>Plongez dans notre espace intérieur de 1000 m² dédié au divertissement familial,
          offrant une vaste aire de jeux et un restaurant pour une expérience complète de plaisirs et d'aventures.</p>
      </div>
      <HomeCards />
      <div className="prices-section">
        <h2>Tarifs</h2>
        <div className="prices-container">
          <div className="price-item">
            <h3>Adultes (+12 ans)</h3>
            <p>Gratuit</p>
          </div>
          <div className="price-item">
            <h3>Entrée 1-2 ans</h3>
            <p>8€</p>
          </div>
          <div className="price-item">
            <h3>Entrée 3-12 ans </h3>
            <p>10€</p>
          </div>
          <div className="price-item">
            <h3> Vendredi <span>(hors vacances scolaires et jours fériés)</span> </h3>
            <p>7€</p>
          </div>
          <div className="price-item">
            <h3>Pass 10 entrées 1-2ans</h3>
            <p>55€</p>
          </div>
          <div className="price-item">
            <h3>Pass 10 entrées 3-12ans</h3>
            <p>75€</p>
          </div>
        </div>
      </div>
      <Horaires />
      <div class="section-blue"></div>
      <div className="reglement">
        <img src={soleil} alt="soleil" className="soleil" />
        <h2>Règles du parc</h2>
        <ul>
          <li>Pour toute entrée achetée, la présence d’un adulte est obligatoire.</li>
          <li>Les enfants sont sous la responsabilité de l’adulte accompagnant.</li>
          <li>Port de chaussettes obligatoire (si vous n’en n’avez pas, des chaussettes sont disponibles en vente au comptoir)</li>
          <li>Toute sortie est définitive.</li>
          <li>Boissons et nourriture venant de l’extérieur interdites. Un snack est disponible sur place.</li>
          <li>Connexion Wi-Fi gratuite dans tout l’établissement.</li>
          <li>Youpi Kids est accessible à tous.</li>
        </ul>
      </div>
      <Banner
          image={accesyoupikids}
          alt="Accès Youpi Kids"
          paddingTop="60px"
          
        />

      <Form />


    </div>
  );
}

export default Home;


