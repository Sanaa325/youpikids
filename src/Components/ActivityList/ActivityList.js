import React, { useState } from 'react';
import Modal from 'react-modal';
import ActivityCard from "../ActivityCard/ActivityCard";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import "./activitylist.css";
import act1 from "../../Assets/act1.jpg";
import act2 from "../../Assets/act2.jpeg";
import act3 from "../../Assets/aact3.jpeg";
import act4 from "../../Assets/act4.JPG";
import act5 from "../../Assets/act5.jpg";
import act6 from "../../Assets/act6.jpg";
import act7 from "../../Assets/act7.jpg";
import act8 from "../../Assets/act8.JPG";
import act9 from "../../Assets/act9.jpg";
import act10 from "../../Assets/act10.jpeg";
import act11 from "../../Assets/act11.jpeg";
import act12 from "../../Assets/act13.jpeg";

const activities = [
  {
    title: 'Piscine à balles',
    image: act1,
    description: 'Découvrez la joie des balles colorées ! Notre Piscine à balles offre un moment amusant et sensoriel pour les tout-petits de moins de 3 ans.',
    category: 'De 1 à 2 ans',
  },
  {
    title: 'Baby parcours',
    image: act2,
    description: 'Parcourez le Baby Parcours pour une aventure spécialement conçue pour les tout-petits ! Une expérience amusante et sécurisée réservée aux enfants de moins de 2 ans. ',
    category: 'De 1 à 2 ans',
  },
  {
    title: 'Constructions des petits',
    image: act3,
    description: 'Éveille ton architecte intérieur avec notre activité Construction des Petits ! Utilise de gigantesques briques LEGO®. Une aventure amusante pour les petits architectes en herbe. À toi de jouer !',
    category: 'De 1 à 2 ans',
  },
  {
    title: 'Mini-manège (jeton)',
    image: act4,
    description: 'Tourne et ris avec notre Mini-Manège ! Une expérience amusante pour les tout-petits. Découvre la magie du manège en miniature ',
    category: 'De 1 à 2 ans',
  },
  {
    title: 'Labyrinthe géant',
    image: act5,
    description: "Perds-toi dans le plaisir avec notre labyrinthe géant ! Trouve ton chemin à travers les passages mystérieux et découvre l'aventure à chaque tournant.",
    category: 'De 3 à 12 ans',
  },
  {
    title: 'Basket-ball / Football court',
    image: act6,
    description: "Marque des paniers et des buts sur notre terrain de basket-ball et de football ! Un espace où les talents sportifs s'expriment et où l'amusement est au rendez-vous.",
    category: 'De 3 à 12 ans',
  },
  {
    title: 'Karting (jeton)',
    image: act7,
    description: 'Vrombissements de moteurs, sensations de vitesse ! Pilote ton propre mini-kart sur la piste spécialement conçue pour les jeunes conducteurs. ',
    category: 'De 3 à 12 ans',

  },
  {
    title: 'Quad (jeton)',
    image: act8,
    description: "Embarque pour une aventure tout-terrain avec nos quads pour enfants !",
    category: 'De 3 à 12 ans',
  },
  {
    title: "Jeux d'arcade (jeton)",
    image: act9,
    description: "Défie tes amis dans des jeux incroyables, d'après toi qui fera le meilleur score?",
    category: 'De 3 à 12 ans',
  },
  {
    title: 'Pat Patrouille ',
    image: act10,
    description: 'Rejoins Chase, Marshall et leurs amis pour une aventure pleine de jeux, de rires et de souvenirs magiques',
    category: 'De 3 à 12 ans',
  },
  {
    title: 'Reine des Neiges ',
    image: act11,
    description: 'Préparez-vous à être émerveillés et à vivre des moments magiques avec La Reine des Neiges !',
    category: 'De 3 à 12 ans',
  },
  {
    title: 'Avengers ',
    image: act12,
    description: "Rejoignez Iron Man, Captain America, Thor, Hulk et toute la bande pour des jeux palpitants, des défis héroïques et des moments pleins d'action.",
    category: 'De 3 à 12 ans',
  },
];



const ActivityList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Toutes les activités");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredActivities = activities.filter((activity) => {
    if (selectedCategory === "Toutes les activités") {
      return true;
    } else {
      return activity.category === selectedCategory;
    }
  });

  const openModal = (activity) => {
    setSelectedActivity(activity);
    setModalIsOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedActivity(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />
      <div className='section-background'>
        <div className="activity-list">
          {filteredActivities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              image={activity.image}
              description={activity.description}
              onClick={() => openModal(activity)}
            />
          ))}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal"
            className="modal-personalised"
            overlayClassName="overlay-class"
            bodyOpenClassName="modal-open"
          >
            {selectedActivity && (
              <div className="modal-content">
                <button className="close-button" onClick={closeModal}>&times;</button>
                <h2 className='modal-title'>{selectedActivity.title}</h2>
                <p className="category-name">{selectedActivity.category}</p>
                <img className='modal-image' src={selectedActivity.image} alt={selectedActivity.title} />
                <p>{selectedActivity.description}</p>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ActivityList;