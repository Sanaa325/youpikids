import React, { useState } from "react";
import annivimage from "../../Assets/annivimage.jpeg";
import anniv1 from "../../Assets/anniv1.jpg";
import anniv from "../../Assets/anniv.png";
import anniv2 from "../../Assets/anniv2.jpg";
import anniv3 from "../../Assets/anniv3.JPG";
import BirthdayCard from "../../Components/BirthdayCard/BrithdayCard";
import Modal from "react-modal";
import "./birthdaylist.css"



const birthdayData = [
  {
    title: 'YUMMY BIRTHDAY',
    image: anniv,
    description: 'Un moment gourmand ',
  },

  {
    title: 'YOUPI FRIDAY',
    image: anniv,
    description: 'Un vendredi entre amis',
  },

  {
    title: 'YOUPI ANIMÉ',
    image: anniv,
    description: 'Une aventure Youpi',
  },

  {
    title: "KING'S BIRTHDAY",
    image: anniv,
    description: 'Un anniversaire de rêve',
  },

];





const BirthdayList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBirthday, setSelectedBirthday] = useState(null);

  const openModal = (index) => {
    setSelectedBirthday(birthdayData[index]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBirthday(null);
  };
  // Define a mapping of titles to colors
  const titleColors = {
    'YUMMY BIRTHDAY': '#8B2A79',
    'YOUPI FRIDAY': '#75C213',
    'YOUPI ANIMÉ': '#FFAC00',
    "KING'S BIRTHDAY": '#F15A35',
  };


  return (
    <div className="birthday-page">
      <div className="card-container">
        {birthdayData.map((birthday, index) => (
          <BirthdayCard
            key={index}
            title={birthday.title}
            image={birthday.image}
            description={birthday.description}
            onClick={() => openModal(index)} // Pass index instead of birthday

          />
        ))}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"

        >
          {selectedBirthday && (
            <div className="b-modal-content">
              <button className="b-close-button" onClick={closeModal}>&times;</button>
              <h2 className="centered-heading" style={{ color: titleColors[selectedBirthday.title], fontFamily: "Porky's" }}>
                {selectedBirthday.title}
              </h2>
              <img 
                src={selectedBirthday.image}
                alt={selectedBirthday.title}
                className="b-modal-imge"
              />
              {/* Custom content based on the selected formula */}
              {selectedBirthday.title === 'YUMMY BIRTHDAY' && (
                <>
                  
                  <h5>Viens t'amuser dans un endroit spécial juste pour tes amis et toi, avec plein de jeux Youpi et un goûter trop cool à partager ! </h5>
                  
                  <h5 className="anniversaire-titre">Ton anniversaire Yummy</h5>
                  <ul>
                    <li>Un espace anniversaire réservé pour l’occasion!</li>
                    <li>L’accès à tous les jeux du parc pour tous tes copains et toi (hors karting et jeux d'arcades) pendant 3h</li>
                    <li>30 minutes d'animation</li>
                    <li>Un repas pour tes amis et toi (Frites, nuggets et compote)</li>
                    <li>Prochaine visite offerte pour toi</li>
                    <li>Une pochette surprise pour tes amis et toi</li>
                    <li>Un super goûter à partager avec tous tes copains avec une boisson et un gâteau d'anniversaire fait maison accompagnés de bonbons et de sirops à volonté.</li>
                    <li>Tes cartons d’invitation à récupérer le jour de la réservation</li>
                  </ul>
                </>
              )}

              {selectedBirthday.title === 'YOUPI FRIDAY' && (
                <>
                  
                  
                  
                  <h5>Passe ta journée du vendredi avec tes amis (valable hors vacances vacances scolaires et jours fériés)</h5>
                  <h5 className="anniversaire-titre">Ton anniversaire Youpi Friday</h5>
                  <ul>
                    <li>Un espace anniversaire réservé pour l’occasion!</li>
                    <li>L’accès à tous les jeux du parc pour tous tes copains et toi (hors karting et jeux d'arcades) pendant 3h</li>
                    <li>1 tour de moto pour tes amis et toi</li>
                    <li>Prochaine visite offerte pour toi</li>
                    <li>Une pochette surprise pour tes amis et toi</li>
                    <li>Un super goûter à partager avec tous tes copains avec une boisson et un gâteau d'anniversaire fait maison accompagnés de bonbons et de sirops à volonté.</li>
                    <li>Tes cartons d’invitation à récupérer le jour de la réservation</li>
                    
                  </ul>
                </>
              )}

              {selectedBirthday.title === 'YOUPI ANIMÉ' && (
                <>
                  
                  
                  
                  
                  <h5 className="anniversaire-titre">Ton anniversaire Youpi Animé</h5>
                  <ul>
                    <li>Un espace anniversaire réservé pour l’occasion!</li>
                    <li>L’accès à tous les jeux du parc pour toi et tous tes copains (hors karting et jeux d'arcades) pendant 3h</li>
                    <li>1 tour de moto pour tes amis et toi</li>
                    <li>Une heure d'animation</li>
                    <li>Un photobooth pour avoir des photos souvenirs de tes amis et toi</li>
                    <li>Prochaine visite offerte pour toi</li>
                    <li>Une pochette surprise pour tes amis et toi</li>
                    <li>Un super goûter à partager avec tous tes copains avec une boisson et un gâteau d'anniversaire fait maison accompagnés de bonbons et de sirops à volonté.</li>
                    <li>Tes cartons d’invitation à récupérer le jour de la réservation</li>
                    
                  </ul>
                </>
              )}

              {selectedBirthday.title === "KING'S BIRTHDAY" && (
                <>
                  
                  
                  
                  
                  <h5 className="anniversaire-titre">Ton anniversaire de King ou de Queen</h5>
                  <ul>
                    <li>Un espace anniversaire réservé pour l’occasion!</li>
                    <li>L’accès à tous les jeux du parc pour tous tes copains et toi (hors karting et jeux d'arcades) pendant 3h</li>
                    <li>Un repas pour tes amis et toi (Frites, nuggets et compote)</li>
                    <li>1 tour de moto pour tes amis et toi</li>
                    <li>Une heure d'animation</li>
                    <li>Un photobooth pour avoir des photos souvenirs de tes amis et toi</li>
                    <li>Prochaine visite offerte pour toi</li>
                    <li>Une pochette surprise pour tes amis et toi</li>
                    <li>Un super goûter à partager avec tous tes copains avec une boisson et un gâteau d'anniversaire fait maison accompagnés de bonbons et de sirops à volonté.</li>
                    <li>Tes cartons d’invitation à récupérer le jour de la réservation</li>
                    
                  </ul>
                </>
              )}




            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default BirthdayList;