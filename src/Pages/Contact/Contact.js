import React from "react";
import Form from "../../Components/Form/Form";
import Banner from "../../Components/Banner/Banner";
import accesyoupikids from "../../Assets/accesyoupikids.png";


const Contact = () => {
  return (
    <div>
      <Form />
      <Banner
        image={accesyoupikids}
        alt="Accès Youpi Kids"
        paddingTop="60px"

      />
    </div>


  );
};

export default Contact;