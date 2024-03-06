import React from "react";
import "./videobanner.css"; // Assurez-vous d'avoir un fichier de style pour votre VideoBanner


const VideoBanner = ({ mobileVideo, desktopVideo, alt }) => {
  const isMobile = window.innerWidth <= 768; // Vous pouvez ajuster la largeur de la fenêtre pour déterminer quand basculer vers la version mobile

  return (
    <div className="VideoBanner">
      <video autoPlay loop muted>
        <source src={isMobile ? mobileVideo : desktopVideo} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
      {alt && <p>{alt}</p>}
    </div>
  );
};

export default VideoBanner;