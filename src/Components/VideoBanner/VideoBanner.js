import React from "react";
import "./videobanner.css"; // Assurez-vous d'avoir un fichier de style pour votre VideoBanner

const VideoBanner = ({ video, alt }) => {
  return (
    <div className="VideoBanner">
      <video autoPlay loop >
        <source src={video} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
      {alt && <p>{alt}</p>}
    </div>
  );
};

export default VideoBanner;