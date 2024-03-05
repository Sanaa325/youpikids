// Librairies
import React from "react";
import '../Footer/footer.css'
import ImgFooter from '../../Assets/Footer.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-img">
                <img src={ImgFooter} alt="img footer" />
            </div>
            <div className="footer-text">
                <p >© 2023 Youpi Kids. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;

