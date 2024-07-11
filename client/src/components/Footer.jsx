import React from 'react';
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <h2>Nous contacter</h2> <br />
        <ul>
          <li><a href="mailto:silvin@mail.fr">silvin@mail.fr</a></li>
          <li><a href="/rencontrer">Nous contacter</a></li>
          <li><a href="/rencontrer">Prendre rendez vous</a></li>
        </ul>
      </div>
      <div>
        <h2>Plan du site</h2> <br />
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">Qui sommes nous ?</a></li>
          <li><a href="/produits">Nos produits</a></li>
          <li><a href="/rencontrer">Contactez nous</a></li>
        </ul>
      </div>
      <div>
        <h2>Mentions légales</h2> <br />
        <p>S'il-vin ©️ Tout droit réservé</p>
      </div>
        
    </footer>
  )
}

export default Footer