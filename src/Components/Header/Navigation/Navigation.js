import React, { useState } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./navigation.css";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="navigation-container">
      {/* Menu de navigation principal */}
      <ul className={`Navigation ${mobileMenuOpen ? 'active' : ''}`}>
        <NavigationItem to="/" onClick={closeMobileMenu}>Accueil</NavigationItem>
        <NavigationItem to="/activites" onClick={closeMobileMenu}>Activités</NavigationItem>
        <NavigationItem to="/anniversaires" onClick={closeMobileMenu}>Anniversaires</NavigationItem>
        <NavigationItem to="/restaurant" onClick={closeMobileMenu}>Restaurant</NavigationItem>
        <NavigationItem to="/groupes" onClick={closeMobileMenu}>Groupes</NavigationItem>
        <NavigationItem to="/contact" onClick={closeMobileMenu}>Contact</NavigationItem>
      </ul>

      {/* Bouton de menu déroulant pour la version mobile */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? '✕' : '☰'}
      </div>

      {/* Menu déroulant pour la version mobile */}
      <div className={`MobileNavigation ${mobileMenuOpen ? 'active' : ''}`}>
        {/* Éléments de navigation pour le menu mobile */}
        <div className="fermer-menu" onClick={closeMobileMenu}>
          ✕
        </div>
        <NavigationItem to="/" onClick={closeMobileMenu}>Accueil</NavigationItem>
        <NavigationItem to="/activites" onClick={closeMobileMenu}>Activités</NavigationItem>
        <NavigationItem to="/anniversaires" onClick={closeMobileMenu}>Anniversaires</NavigationItem>
        <NavigationItem to="/restaurant" onClick={closeMobileMenu}>Restaurant</NavigationItem>
        <NavigationItem to="/groupes" onClick={closeMobileMenu}>Groupes</NavigationItem>
        <NavigationItem to="/contact" onClick={closeMobileMenu}>Contact</NavigationItem>
      </div>
    </div>
  );
}

export default Navigation;
