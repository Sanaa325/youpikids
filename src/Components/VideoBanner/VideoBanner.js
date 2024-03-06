import React, { useEffect, useState } from "react";
import "./videobanner.css";

const VideoBanner = ({ mobileVideo, desktopVideo, alt }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="VideoBanner">
      <video autoPlay loop >
        <source src={isMobile ? mobileVideo : desktopVideo} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
      {alt && <p>{alt}</p>}
    </div>
  );
};

export default VideoBanner;