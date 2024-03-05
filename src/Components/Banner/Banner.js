import React from "react";
import "../Banner/banner.css";

function Banner(props) {
  const { image, alt, paddingTop } = props;

  const bannerStyle = {
    paddingTop,
  };

  return (
    <img
      src={image}
      className="Banner"
      alt={alt}
      style={bannerStyle}
    />
  );
}

export default Banner;